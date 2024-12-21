#!/bin/bash

# author        : eshan roy
# author url    : https://eshanized.github.io/

set -e  # exit immediately if a command exits with a non-zero status

# colors
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
RESET="\033[0m"

# log file path
LOG_FILE="/var/log/package_uninstall.log"

# function to display error message and exit
error_handler() {
    echo -e "\n${RED}🚨 an error occurred during the uninstallation process.${RESET}"
    echo -e "${RED}command: $BASH_COMMAND${RESET}"
    echo -e "${RED}error on line $1. please check your system and try again.${RESET}"
    echo -e "$(date) - ERROR: an error occurred during the uninstallation process for $PACKAGE" >> $LOG_FILE
    exit 1
}

# trap errors and call error_handler
trap 'error_handler $LINENO' ERR

# function to display help message
show_help() {
    echo -e "${BLUE}usage: ${RESET}$0 <package_name> [options]"
    echo -e ""
    echo -e "${GREEN}this script will uninstall the specified package, remove its cache, and clean up orphaned packages.${RESET}"
    echo -e ""
    echo -e "${YELLOW}options:${RESET}"
    echo -e "  ${GREEN}-h, --help${RESET}          show this help message."
    echo -e "  ${GREEN}-d, --dry-run${RESET}       show what will be done without performing any actions."
    echo -e "  ${GREEN}-f, --force${RESET}         force removal of the package even if it has dependencies."
    echo -e "  ${GREEN}-b, --backup${RESET}        backup configuration files before uninstallation."
    echo -e ""
    echo -e "${YELLOW}example usage:${RESET}"
    echo -e "  $0 firefox                # uninstalls the firefox package and its cache."
    echo -e "  $0 -d firefox             # show the dry-run actions for firefox."
    echo -e "  $0 -f firefox             # force remove firefox package."
    echo -e "  $0 -b firefox             # backup configuration before uninstalling firefox."
    echo -e "  $0 -h                     # displays this help message."
}

# parse command line options
DRY_RUN=false
FORCE=false
BACKUP=false

while [[ "$1" == -* ]]; do
    case "$1" in
        -h|--help) show_help; exit 0 ;;
        -d|--dry-run) DRY_RUN=true; shift ;;
        -f|--force) FORCE=true; shift ;;
        -b|--backup) BACKUP=true; shift ;;
        *) echo -e "${RED}❌ invalid option $1.${RESET}"; show_help; exit 1 ;;
    esac
done

# ensure the script is run as root for certain actions
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ please run this script as root or with sudo.${RESET}"
    exit 1
fi

# check if a package name is provided
if [ -z "$1" ]; then
    echo -e "${RED}❌ no package specified.${RESET}"
    echo -e "usage: $0 <package_name>"
    exit 1
fi

PACKAGE=$1

# check if package is installed
if ! pacman -Qi $PACKAGE > /dev/null; then
    echo -e "${RED}❌ the package $PACKAGE is not installed on your system.${RESET}"
    exit 1
fi

# confirm with the user
echo -e "${YELLOW}⚠️ warning: this script will uninstall the specified package and remove its cache.${RESET}"
read -p "$(echo -e "${BLUE}are you sure you want to uninstall $PACKAGE and remove its cache? [y/N]: ${RESET}")" CONFIRM
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
    echo -e "${RED}❌ operation cancelled.${RESET}"
    exit 0
fi

# backup configuration files (optional)
if $BACKUP; then
    echo -e "${BLUE}🔄 backing up configuration files for $PACKAGE...${RESET}"
    backup_dir="/path/to/backup/$PACKAGE"
    mkdir -p "$backup_dir"
    cp /etc/$PACKAGE/* "$backup_dir" || { echo -e "${RED}❌ backup failed.${RESET}"; exit 1; }
    echo -e "${GREEN}✅ backup completed!${RESET}"
fi

# dry-run mode (only show what would be done)
if $DRY_RUN; then
    echo -e "${YELLOW}dry-run mode enabled: the following actions would be performed.${RESET}"
    pacman -Qi $PACKAGE
    echo -e "${BLUE}would uninstall $PACKAGE, remove its cache, and clean orphaned packages.${RESET}"
    exit 0
fi

# force removal option
if $FORCE; then
    echo -e "${YELLOW}⚠️ force removal enabled for $PACKAGE.${RESET}"
    sudo pacman -Rdd $PACKAGE --noconfirm || { echo -e "${RED}❌ failed to force remove $PACKAGE.${RESET}"; exit 1; }
else
    # uninstall the package and its dependencies
    echo -e "${BLUE}📦 uninstalling $PACKAGE...${RESET}"
    sudo pacman -Rns $PACKAGE --noconfirm || { echo -e "${RED}❌ failed to uninstall $PACKAGE.${RESET}"; exit 1; }
fi

# remove the package's cache
echo -e "${BLUE}🗑️ removing cache for $PACKAGE...${RESET}"
sudo pacman -Sc --noconfirm || echo -e "${YELLOW}❗ cache removal skipped.${RESET}"

# clean up orphaned packages
echo -e "${BLUE}🧹 cleaning up orphaned packages...${RESET}"
sudo pacman -Rns $(pacman -Qtdq) --noconfirm || echo -e "${YELLOW}no orphaned packages to remove.${RESET}"

# log the uninstallation
echo -e "$(date) - successfully uninstalled $PACKAGE" >> $LOG_FILE

echo -e "\n${GREEN}✅ package $PACKAGE successfully uninstalled!${RESET}"
exit 0
