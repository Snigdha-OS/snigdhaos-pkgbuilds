#!/bin/bash

# Define color codes
RESET='\033[0m'
BOLD='\033[1m'
RED='\033[31m'
GREEN='\033[32m'
YELLOW='\033[33m'
BLUE='\033[34m'

# Define the mirror list files
ARCH_MIRROR_LIST="/etc/pacman.d/mirrorlist"
BLACKARCH_MIRROR_LIST="/etc/pacman.d/blackarch-mirrorlist"
CHAOTIC_AUR_MIRROR_LIST="/etc/pacman.d/chaotic-mirrorlist"

# Define a backup directory for safety
BACKUP_DIR="/tmp/backup_mirrorlists_$(date +%Y%m%d_%H%M%S)"

# Error handling function
error_exit() {
    echo -e "${RED}ERROR: $1${RESET}" >&2
    exit 1
}

# Create backup directory safely
mkdir -p "$BACKUP_DIR" || error_exit "Failed to create backup directory"

# Function to check if rankmirrors is installed
check_rankmirrors_installed() {
    if ! command -v rankmirrors &> /dev/null; then
        echo -e "${RED}rankmirrors is not installed.${RESET}"
        read -p "Would you like to install rankmirrors now? (y/n): " choice
        if [[ "$choice" =~ ^[yY]$ ]]; then
            echo -e "${BLUE}Installing rankmirrors...${RESET}"
            sudo pacman -S --noconfirm pacman-contrib || error_exit "Failed to install rankmirrors"
            echo -e "${GREEN}rankmirrors installed successfully!${RESET}"
        else
            error_exit "rankmirrors is required to proceed."
        fi
    fi
}

# Function to auto-detect the country based on the system's timezone
get_country_from_timezone() {
    local timezone
    # Try multiple methods to get timezone
    timezone=$(timedatectl show --property=Timezone --value 2>/dev/null) ||
    timezone=$(cat /etc/timezone 2>/dev/null) ||
    timezone=$(readlink -f /etc/localtime 2>/dev/null)

    # Extract country from timezone
    local country
    country=$(echo "$timezone" | sed -E 's:.*/([^/]+):\1:' | cut -d'_' -f1)

    # Fallback to default if country can't be determined
    if [[ -z "$country" || "$country" == "Etc" || "$country" == "GMT" ]]; then
        country="United States"
    fi

    echo "$country"
}

# Main script execution
main() {
    # Get the country based on the system's timezone
    local country
    country=$(get_country_from_timezone)
    echo -e "${BLUE}Detected country based on timezone: ${GREEN}$country${RESET}"

    # Check for root/sudo permissions
    if [[ $EUID -eq 0 ]]; then
        error_exit "Do not run this script as root. Use sudo if needed."
    fi

    # Check if rankmirrors is installed
    check_rankmirrors_installed

    # Backup current mirror lists
    echo -e "${BLUE}Backing up current mirror lists...${RESET}"
    for list in "$ARCH_MIRROR_LIST" "$BLACKARCH_MIRROR_LIST" "$CHAOTIC_AUR_MIRROR_LIST"; do
        if [[ -f "$list" ]]; then
            cp "$list" "$BACKUP_DIR/$(basename "$list").bak" || error_exit "Failed to backup $list"
        fi
    done

    # Ensure backup was successful
    [[ "$(ls -A "$BACKUP_DIR")" ]] || error_exit "No mirror lists were backed up"

    # Update system packages
    echo -e "${YELLOW}Updating system packages...${RESET}"
    sudo pacman -Sy || error_exit "Failed to update package databases"

    # Prepare temporary directory for new mirror lists
    temp_dir=$(mktemp -d) || error_exit "Failed to create temporary directory"
    trap 'rm -rf "$temp_dir"' EXIT

    # Use rankmirrors to generate new mirror lists
    echo -e "${GREEN}Selecting fastest mirrors using rankmirrors...${RESET}"

    # Rank and save Arch Linux mirror list
    sudo rankmirrors -n 6 /etc/pacman.d/mirrorlist | tee "$temp_dir/mirrorlist" ||
    error_exit "Failed to generate Arch mirror list"

    # Rank and save BlackArch mirror list
    sudo rankmirrors -n 6 /etc/pacman.d/blackarch-mirrorlist | tee "$temp_dir/blackarch-mirrorlist" ||
    error_exit "Failed to generate BlackArch mirror list"

    # Rank and save Chaotic-AUR mirror list
    sudo rankmirrors -n 6 /etc/pacman.d/chaotic-mirrorlist | tee "$temp_dir/chaotic-mirrorlist" ||
    error_exit "Failed to generate Chaotic-AUR mirror list"

    # Check if the files exist before copying
    if [[ -f "$temp_dir/mirrorlist" ]]; then
        sudo cp "$temp_dir/mirrorlist" "$ARCH_MIRROR_LIST" || error_exit "Failed to copy Arch mirror list"
    else
        error_exit "Arch mirror list not found in $temp_dir"
    fi

    if [[ -f "$temp_dir/blackarch-mirrorlist" ]]; then
        sudo cp "$temp_dir/blackarch-mirrorlist" "$BLACKARCH_MIRROR_LIST" || error_exit "Failed to copy BlackArch mirror list"
    else
        error_exit "BlackArch mirror list not found in $temp_dir"
    fi

    if [[ -f "$temp_dir/chaotic-mirrorlist" ]]; then
        sudo cp "$temp_dir/chaotic-mirrorlist" "$CHAOTIC_AUR_MIRROR_LIST" || error_exit "Failed to copy Chaotic-AUR mirror list"
    else
        error_exit "Chaotic-AUR mirror list not found in $temp_dir"
    fi

    # Success messages
    echo -e "${GREEN}Mirror lists have been updated successfully!${RESET}"
    echo -e "${BLUE}Your system's mirror lists have been optimized.${RESET}"

    # Optional system update
    read -p "Would you like to perform a full system update now? (y/n): " choice
    if [[ "$choice" =~ ^[yY]$ ]]; then
        sudo pacman -Syu
        echo -e "${GREEN}System update completed!${RESET}"
    else
        echo -e "${YELLOW}Mirror update complete. You can run 'sudo pacman -Syu' later.${RESET}"
    fi
}

# Run the main function
main
