#!/bin/bash

# author        : eshan roy
# author url    : https://eshanized.github.io/

# colors for formatting output in terminal
RED="\033[1;31m"        # red color for errors
GREEN="\033[1;32m"      # green color for success messages
YELLOW="\033[1;33m"     # yellow color for warnings
BLUE="\033[1;34m"       # blue color for info messages
RESET="\033[0m"         # reset color to default

# log file path to save script output
LOG_FILE="/var/log/snigdha_update_script.log"

# function to display error message and exit
error_handler() {
    echo -e "\n${RED}🚨 an error occurred during the update process.${RESET}"  # print error message in red
    echo -e "${RED}error on line $1. please check your system and try again.${RESET}"  # indicate the line number where error occurred
    echo -e "$(date) - error on line $1" >> $LOG_FILE  # log error with timestamp
    exit 1  # exit the script with error status
}

# trap errors and call error_handler when an error occurs
trap 'error_handler $LINENO' ERR

# function to display help message
show_help() {
    # display general usage of the script
    echo -e "${BLUE}usage: ${RESET}$0 [options]"
    echo -e ""
    echo -e "${GREEN}this script will update the package database, upgrade all installed packages, and clean up orphaned packages.${RESET}"
    echo -e ""
    # show available options for the script
    echo -e "${YELLOW}options:${RESET}"
    echo -e "  ${GREEN}-h, --help${RESET}          show this help message."
    echo -e "  ${GREEN}-v, --verbose${RESET}       enable verbose output."
    echo -e "  ${GREEN}-d, --dry-run${RESET}       show what would be done without making changes."
    echo -e "  ${GREEN}-b, --backup${RESET}        backup important configuration files before updating."
    echo -e ""
    # provide usage examples for the user
    echo -e "${YELLOW}example usage:${RESET}"
    echo -e "  $0                         # updates the system and removes orphaned packages."
    echo -e "  $0 -v                      # run in verbose mode."
    echo -e "  $0 -d                      # dry run (preview only)."
    echo -e "  $0 -b                      # backup configuration files before updating."
}

# parse command line options for verbose, dry-run, and backup flags
VERBOSE=false  # default to false, verbose output is off
DRY_RUN=false  # default to false, dry-run mode is off
BACKUP=false   # default to false, backup is not done by default

while [[ "$1" != "" ]]; do  # loop through each command-line argument
    case $1 in
        -h|--help) show_help; exit 0 ;;        # if -h or --help is passed, show help and exit
        -v|--verbose) VERBOSE=true ;;          # if -v or --verbose is passed, enable verbose mode
        -d|--dry-run) DRY_RUN=true ;;          # if -d or --dry-run is passed, enable dry-run mode
        -b|--backup) BACKUP=true ;;            # if -b or --backup is passed, enable backup option
        *) echo -e "${RED}❌ invalid option: $1${RESET}"; show_help; exit 1 ;;  # handle invalid options
    esac
    shift  # move to the next argument
done

# ensure the script is run as root for certain actions
if [ "$EUID" -ne 0 ]; then  # check if the script is being run by root user
    echo -e "${RED}❌ please run this script as root or with sudo.${RESET}"  # print error if not root
    exit 1  # exit the script
fi

# warning message before proceeding with the update
echo -e "${YELLOW}⚠️ warning: this script will update your system, upgrade installed packages, and clean up orphaned packages.${RESET}"
if $BACKUP; then  # if the backup option is enabled
    echo -e "${YELLOW}⚠️ you have chosen to backup important configuration files.${RESET}"
    read -p "$(echo -e "${BLUE}are you sure you want to proceed? [y/N]: ${RESET}")" CONFIRM  # ask for confirmation
else
    read -p "$(echo -e "${BLUE}are you sure you want to proceed? [y/N]: ${RESET}")" CONFIRM  # normal confirmation prompt
fi
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then  # check if user confirmed
    echo -e "${RED}❌ operation cancelled.${RESET}"  # print cancellation message
    exit 0  # exit the script
fi

# backup important configuration files (optional)
backup_config_files() {
    echo -e "${BLUE}📦 backing up important configuration files...${RESET}"  # inform about backup
    BACKUP_DIR="/home/$USER/important_configs"  # directory to store backups
    mkdir -p $BACKUP_DIR  # create backup directory if it doesn't exist

    # list of important config files to back up
    CONFIG_FILES=(
        "/etc/pacman.conf"
        "/etc/makepkg.conf"
        "/etc/sudoers"
        "/etc/systemd/system"
        "$HOME/.bashrc"
        "$HOME/.zshrc"
    )

    for FILE in "${CONFIG_FILES[@]}"; do  # loop through each config file
        if [ -e "$FILE" ]; then  # check if the file exists
            cp -r "$FILE" "$BACKUP_DIR" || { echo -e "${RED}❌ failed to back up $FILE.${RESET}"; exit 1; }  # copy the file to backup
            echo -e "${GREEN}✅ backed up $FILE${RESET}"  # inform the user the file was backed up
        else
            echo -e "${YELLOW}⚠️ skipping $FILE (not found).${RESET}"  # if the file is not found, skip it
        fi
    done
}

# log the start of the script
echo -e "$(date) - starting update process" >> $LOG_FILE  # log the start with timestamp

# update the package database and upgrade packages
echo -e "${BLUE}🔄 updating the package database...${RESET}"
if $VERBOSE; then  # if verbose mode is enabled
    sudo pacman -Sy --verbose || error_handler $LINENO  # run with verbose output
else
    sudo pacman -Sy || error_handler $LINENO  # run normally
fi

echo -e "${BLUE}📦 upgrading installed packages...${RESET}"
if $DRY_RUN; then  # if dry-run mode is enabled
    echo -e "${YELLOW}⚠️ dry run mode: the following commands would be executed but won't make changes.${RESET}"
    echo -e "  sudo pacman -Su --noconfirm"  # show the dry-run commands
else
    if $VERBOSE; then  # if verbose mode is enabled
        sudo pacman -Su --noconfirm --verbose || error_handler $LINENO  # upgrade with verbose
    else
        sudo pacman -Su --noconfirm || error_handler $LINENO  # upgrade normally
    fi
fi

# clean up orphaned packages
echo -e "${BLUE}🧹 cleaning up orphaned packages...${RESET}"
if $DRY_RUN; then  # if dry-run mode is enabled
    orphaned_packages=$(pacman -Qtdq)  # list orphaned packages
    if [ -z "$orphaned_packages" ]; then  # if no orphaned packages
        echo -e "${YELLOW}no orphaned packages to remove.${RESET}"  # inform the user
    else  # if orphaned packages exist
        echo -e "${YELLOW}the following orphaned packages would be removed:${RESET} $orphaned_packages"
    fi
else  # if dry-run mode is not enabled
    sudo pacman -Rns $(pacman -Qtdq) --noconfirm || echo -e "${YELLOW}no orphaned packages to remove.${RESET}"  # remove orphaned packages
fi

# log successful completion
echo -e "$(date) - system successfully updated." >> $LOG_FILE  # log the successful completion

# final success message
echo -e "\n${GREEN}✅ system successfully updated!${RESET}"  # print success message
exit 0  # exit the script
