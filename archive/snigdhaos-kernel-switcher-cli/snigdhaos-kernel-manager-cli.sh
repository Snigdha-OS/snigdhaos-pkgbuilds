#!/bin/bash

# Define color codes
RED='\033[1;31m'
GREEN='\033[1;32m'
YELLOW='\033[1;33m'
BLUE='\033[1;34m'
CYAN='\033[1;36m'
RESET='\033[0m'

# Define script version
SCRIPT_VERSION="1.0.0"
GITHUB_REPO="https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-pkgbuilds/refs/heads/master/snigdhaos-kernel-switcher-cli/snigdhaos-kernel-manager-cli.sh"

# Function to check if the script is run as root
check_root() {
    if [[ $EUID -ne 0 ]]; then
        echo -e "${RED}This script must be run as root. Please use sudo or switch to root.${RESET}"
        exit 1
    fi
}

# Function to check for updates
check_for_updates() {
    echo -e "${BLUE}Checking for script updates...${RESET}"

    # Fetch the latest script version from the GitHub repository
    latest_version=$(curl -s https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-pkgbuilds/refs/heads/master/snigdhaos-kernel-switcher-cli/version.txt)

    if [[ -z "$latest_version" ]]; then
        echo -e "${RED}Failed to fetch the latest version. Please check your internet connection.${RESET}"
        return
    fi

    echo -e "${CYAN}Current version:${RESET} $SCRIPT_VERSION"
    echo -e "${CYAN}Latest version:${RESET} $latest_version"

    # Compare the versions
    if [[ "$SCRIPT_VERSION" != "$latest_version" ]]; then
        echo -e "${YELLOW}An update is available!${RESET}"
        echo -e "${YELLOW}Do you want to update to the latest version? (y/N):${RESET}"
        read -r update_choice
        if [[ "$update_choice" =~ ^[Yy]$ ]]; then
            update_script
        else
            echo -e "${GREEN}Skipping update.${RESET}"
        fi
    else
        echo -e "${GREEN}You are using the latest version of the script.${RESET}"
    fi
}

# Function to update the script
update_script() {
    echo -e "${CYAN}Updating the script...${RESET}"
    
    # Download the latest version of the script
    curl -s -o "$0" "$GITHUB_REPO" && {
        echo -e "${GREEN}Script updated successfully! Please re-run the script.${RESET}"
        exit 0
    } || {
        echo -e "${RED}Failed to update the script. Please try again later.${RESET}"
        exit 1
    }
}

# Function to list installed kernels with descriptions
list_installed_kernels() {
    echo -e "${BLUE}Currently installed kernels:${RESET}"
    pacman -Q | grep -E '^linux(-lts|-zen|-hardened|-xanmod|-ck|-clear|-lqx)?($|-headers)' | while read -r kernel _; do
        case "$kernel" in
            linux)
                echo -e "${CYAN}$kernel:${RESET} Default Arch Linux kernel (general-purpose)."
                ;;
            linux-lts)
                echo -e "${CYAN}$kernel:${RESET} Long-Term Support (LTS) kernel for stability."
                ;;
            linux-zen)
                echo -e "${CYAN}$kernel:${RESET} Zen kernel optimized for desktop performance."
                ;;
            linux-hardened)
                echo -e "${CYAN}$kernel:${RESET} Security-focused kernel with additional patches."
                ;;
            *)
                echo -e "${CYAN}$kernel:${RESET} Custom or community kernel."
                ;;
        esac
    done || echo -e "${YELLOW}No kernels found.${RESET}"
}

# Function to install kernel and headers from official repositories
install_official_kernel() {
    while true; do
        echo -e "${BLUE}Available kernel options:${RESET}"
        echo -e "1) ${CYAN}linux:${RESET} Default Arch Linux kernel (general-purpose)."
        echo -e "2) ${CYAN}linux-lts:${RESET} Long-Term Support (LTS) kernel for stability."
        echo -e "3) ${CYAN}linux-zen:${RESET} Zen kernel optimized for desktop performance."
        echo -e "4) ${CYAN}linux-hardened:${RESET} Security-focused kernel with additional patches."
        echo -e "5) ${CYAN}Custom kernel name.${RESET}"
        echo -e "6) ${YELLOW}Go back to the main menu.${RESET}"

        echo -e "${YELLOW}Choose a kernel option (1-6):${RESET}"
        read -r choice
        case $choice in
            1) kernel="linux" ;;
            2) kernel="linux-lts" ;;
            3) kernel="linux-zen" ;;
            4) kernel="linux-hardened" ;;
            5)
                echo -e "${YELLOW}Enter the custom kernel name:${RESET}"
                read -r kernel
                ;;
            6)
                echo -e "${YELLOW}Returning to the main menu...${RESET}"
                return
                ;;
            *)
                echo -e "${RED}Invalid option. Please choose a valid option.${RESET}"
                continue
                ;;
        esac

        echo -e "${CYAN}Installing kernel:${RESET} $kernel and its headers..."
        pacman -Sy --noconfirm && pacman -S --needed --noconfirm "$kernel" "$kernel-headers" && {
            echo -e "${GREEN}Successfully installed $kernel and $kernel-headers.${RESET}"
        } || {
            echo -e "${RED}Failed to install $kernel or its headers. Check the kernel name or your package manager.${RESET}"
        }
        return
    done
}

# Function to install community kernels from AUR
install_community_kernel() {
    while true; do
        echo -e "${BLUE}Choose a community kernel to install from the AUR:${RESET}"
        echo -e "1) ${CYAN}linux-xanmod:${RESET} XanMod Kernel optimized for performance and gaming."
        echo -e "2) ${CYAN}linux-ck:${RESET} CK Kernel optimized for low-latency tasks."
        echo -e "3) ${CYAN}linux-zen:${RESET} Zen Kernel (community build with desktop optimizations)."
        echo -e "4) ${CYAN}linux-clear:${RESET} Clear Linux Kernel optimized by Intel for speed."
        echo -e "5) ${CYAN}linux-lqx:${RESET} Liquorix Kernel for gaming and multimedia."
        echo -e "6) ${YELLOW}Back to the main menu.${RESET}"

        echo -e "${YELLOW}Choose an option (1-6):${RESET}"
        read -r aur_choice
        case $aur_choice in
            1) aur_kernel="linux-xanmod" ;;
            2) aur_kernel="linux-ck" ;;
            3) aur_kernel="linux-zen" ;;
            4) aur_kernel="linux-clear" ;;
            5) aur_kernel="linux-lqx" ;;
            6)
                echo -e "${YELLOW}Returning to the main menu...${RESET}"
                return
                ;;
            *)
                echo -e "${RED}Invalid option. Please choose a valid option.${RESET}"
                continue
                ;;
        esac

        # Check if AUR helper is installed
        if ! command -v paru &>/dev/null && ! command -v yay &>/dev/null; then
            echo -e "${RED}No AUR helper (paru or yay) detected.${RESET}"
            echo -e "${YELLOW}Would you like to install one of the following? (y/N):${RESET}"
            echo -e "1) ${CYAN}Install paru${RESET}"
            echo -e "2) ${CYAN}Install yay${RESET}"
            echo -e "3) ${YELLOW}Back to the main menu${RESET}"
            read -r install_choice
            case $install_choice in
                1)
                    echo -e "${CYAN}Installing paru...${RESET}"
                    pacman -S --needed --noconfirm paru && echo -e "${GREEN}paru installed successfully.${RESET}" || echo -e "${RED}Failed to install paru.${RESET}"
                    ;;
                2)
                    echo -e "${CYAN}Installing yay...${RESET}"
                    pacman -S --needed --noconfirm yay && echo -e "${GREEN}yay installed successfully.${RESET}" || echo -e "${RED}Failed to install yay.${RESET}"
                    ;;
                3)
                    return
                    ;;
                *)
                    echo -e "${RED}Invalid option.${RESET}"
                    continue
                    ;;
            esac
        fi

        echo -e "${CYAN}Installing $aur_kernel from AUR...${RESET}"
        aur_helper=$(command -v paru || command -v yay)
        $aur_helper -S --needed --noconfirm "$aur_kernel" && echo -e "${GREEN}$aur_kernel installed successfully.${RESET}" || echo -e "${RED}Failed to install $aur_kernel.${RESET}"
        return
    done
}

# Main Menu
main_menu() {
    while true; do
        echo -e "${GREEN}Kernel Manager Script${RESET}"
        echo -e "1) ${CYAN}List installed kernels${RESET}"
        echo -e "2) ${CYAN}Install a kernel from official repositories${RESET}"
        echo -e "3) ${CYAN}Install a community kernel from AUR${RESET}"
        echo -e "4) ${CYAN}Uninstall a kernel${RESET}"
        echo -e "5) ${CYAN}Check for updates${RESET}"
        echo -e "6) ${RED}Exit${RESET}"

        echo -e "${YELLOW}Choose an option (1-6):${RESET}"
        read -r option
        case $option in
            1) list_installed_kernels ;;
            2) install_official_kernel ;;
            3) install_community_kernel ;;
            4) uninstall_kernel ;;
            5) check_for_updates ;;
            6) exit 0 ;;
            *) echo -e "${RED}Invalid option. Please choose a valid option.${RESET}" ;;
        esac
    done
}

# Run the main menu
check_root
main_menu
