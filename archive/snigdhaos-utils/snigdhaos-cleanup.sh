#!/bin/bash

# Author        : Eshan Roy
# Author URL    : https://eshanized.github.io/

set -e  # Exit immediately if a command exits with a non-zero status

# Colors
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
RESET="\033[0m"

# Function to display error message and exit
error_handler() {
    echo -e "\n${RED}🚨 An error occurred during the cleanup process.${RESET}"
    echo -e "${RED}Error on line $1. Please check your system and try again.${RESET}"
    exit 1
}

# Trap errors and call error_handler
trap 'error_handler $LINENO' ERR

# Function to display help message
show_help() {
    echo -e "${BLUE}Usage: ${RESET}snigdhaos-cleanup.sh [OPTIONS]"
    echo -e ""
    echo -e "${GREEN}This script will clean up your system by deleting unused package caches, crash reports, application logs, application caches, and trash.${RESET}"
    echo -e ""
    echo -e "${YELLOW}Options:${RESET}"
    echo -e "  ${GREEN}-h, --help${RESET}          Show this help message."
    echo -e "  ${GREEN}-v, --version${RESET}       Display the script version."
    echo -e "  ${GREEN}-f, --force${RESET}         Skip confirmation prompt and force cleanup."
    echo -e "  ${GREEN}--dry-run${RESET}           Simulate cleanup without deleting anything."
    echo -e "  ${GREEN}--rotate-logs${RESET}       Rotate and archive logs instead of truncating them."
    echo -e "  ${GREEN}--memory-cache${RESET}      Clean system memory cache."
    echo -e "  ${GREEN}--backup${RESET}            Back up important configuration files."
    echo -e "  ${GREEN}--notify${RESET}            Send a notification when the cleanup is complete."
    echo -e ""
    echo -e "Example usage:"
    echo -e "  snigdhaos-cleanup.sh                 # Starts the cleanup process with a confirmation prompt."
    echo -e "  snigdhaos-cleanup.sh -f              # Skips the confirmation and forces cleanup."
    echo -e "  snigdhaos-cleanup.sh --dry-run       # See what would be cleaned without actually deleting."
}

# Function to display version information
show_version() {
    echo -e "${BLUE}Version: 1.1.0${RESET}"
}

# Parse command line options
FORCE_CLEAN=false
DRY_RUN=false
ROTATE_LOGS=false
CLEAN_MEMORY_CACHE=false
BACKUP=false
NOTIFY=false
while [[ "$#" -gt 0 ]]; do
    case "$1" in
        -h|--help)
            show_help
            exit 0
            ;;
        -v|--version)
            show_version
            exit 0
            ;;
        -f|--force)
            FORCE_CLEAN=true
            shift
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        --rotate-logs)
            ROTATE_LOGS=true
            shift
            ;;
        --memory-cache)
            CLEAN_MEMORY_CACHE=true
            shift
            ;;
        --backup)
            BACKUP=true
            shift
            ;;
        --notify)
            NOTIFY=true
            shift
            ;;
        *)
            echo -e "${RED}❌ Unknown option: $1${RESET}"
            show_help
            exit 1
            ;;
    esac
done

# Ensure the script is run as root for certain actions
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Please run this script as root or with sudo.${RESET}"
    exit 1
fi

# Function to send notifications
send_notification() {
    MESSAGE="Cleanup completed successfully!"
    notify-send "Cleanup Script" "$MESSAGE" || { echo -e "${RED}❌ Failed to send notification.${RESET}"; exit 1; }
    echo -e "${GREEN}✅ Notification sent.${RESET}"
}

# Function to back up important config files
backup_config_files() {
    BACKUP_DIR="/path/to/backup"
    CONFIG_DIRS=("/etc" "/home/*/.config")
    mkdir -p "$BACKUP_DIR"
    for dir in "${CONFIG_DIRS[@]}"; do
        sudo cp -r "$dir" "$BACKUP_DIR" || { echo -e "${RED}❌ Failed to backup $dir.${RESET}"; exit 1; }
    done
    echo -e "${GREEN}✅ Configuration files backed up.${RESET}"
}

# Function to clean memory cache
clean_memory_cache() {
    echo -e "${YELLOW}⚠️ Cleaning memory cache...${RESET}"
    sudo sync && sudo echo 3 > /proc/sys/vm/drop_caches || { echo -e "${RED}❌ Failed to clean memory cache.${RESET}"; exit 1; }
    echo -e "${GREEN}✅ Memory cache cleaned.${RESET}"
}

# Function to rotate logs
rotate_logs() {
    LOG_DIR="/var/log"
    LOG_ARCHIVE_DIR="/var/log/archives"
    mkdir -p "$LOG_ARCHIVE_DIR"
    sudo find "$LOG_DIR" -type f -name "*.log" -exec bash -c 'gzip -c "$0" > "$1/$(basename $0).gz" && truncate -s 0 "$0"' {} "$LOG_ARCHIVE_DIR" \;
    echo -e "${GREEN}✅ Logs rotated and archived.${RESET}"
}

# Function to clean package cache
clean_package_cache() {
    echo -e "${YELLOW}⚠️ Deleting package cache...${RESET}"
    if ! $DRY_RUN; then
        sudo pacman -Sc --noconfirm || { echo -e "${RED}❌ Failed to clean package cache.${RESET}"; exit 1; }
    fi
    echo -e "${GREEN}✅ Package cache cleaned.${RESET}"
}

# Function to clean crash reports
clean_crash_reports() {
    echo -e "${YELLOW}⚠️ Deleting crash reports...${RESET}"
    CRASH_DIR="/var/lib/systemd/coredump"
    if [ -d "$CRASH_DIR" ]; then
        sudo rm -rf "$CRASH_DIR"/* || { echo -e "${RED}❌ Failed to clean crash reports.${RESET}"; exit 1; }
        echo -e "${GREEN}✅ Crash reports cleaned.${RESET}"
    else
        echo -e "${GREEN}✅ No crash reports found.${RESET}"
    fi
}

# Function to clean application logs
clean_application_logs() {
    echo -e "${YELLOW}⚠️ Truncating application logs...${RESET}"
    LOG_DIR="/var/log"
    sudo find "$LOG_DIR" -type f -name "*.log" -exec truncate -s 0 {} \; || { echo -e "${RED}❌ Failed to clean application logs.${RESET}"; exit 1; }
    echo -e "${GREEN}✅ Application logs cleaned.${RESET}"
}

# Function to clean application caches
clean_application_caches() {
    echo -e "${YELLOW}⚠️ Deleting application caches...${RESET}"
    CACHE_DIR="/home/*/.cache"
    sudo rm -rf $CACHE_DIR/* || { echo -e "${RED}❌ Failed to clean application caches.${RESET}"; exit 1; }
    echo -e "${GREEN}✅ Application caches cleaned.${RESET}"
}

# Function to empty trash
clean_trash() {
    echo -e "${YELLOW}⚠️ Emptying trash...${RESET}"
    TRASH_DIR="/home/*/.local/share/Trash"
    sudo rm -rf $TRASH_DIR/* || { echo -e "${RED}❌ Failed to empty trash.${RESET}"; exit 1; }
    echo -e "${GREEN}✅ Trash emptied.${RESET}"
}

# Prompt for confirmation if not forced
if ! $FORCE_CLEAN; then
    echo -e "${YELLOW}⚠️ WARNING: This script will permanently delete unnecessary files, logs, and caches to free up disk space.${RESET}"
    echo -e "${BLUE}👉 The following will be cleaned:${RESET}"
    echo -e "${GREEN}   - Package cache${RESET}"
    echo -e "${GREEN}   - Crash reports${RESET}"
    echo -e "${GREEN}   - Application logs${RESET}"
    echo -e "${GREEN}   - Application caches${RESET}"
    echo -e "${GREEN}   - Trash${RESET}"
    read -p "$(echo -e "${YELLOW}❓ Are you sure you want to proceed? [y/N]: ${RESET}")" CONFIRM
    if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
        echo -e "${RED}❌ Cleanup operation cancelled.${RESET}"
        exit 0
    fi
fi

# Run specific cleanup tasks based on flags
echo -e "${BLUE}🧹 Starting cleanup process...${RESET}"

# Perform the selected cleanup tasks
if $BACKUP; then
    backup_config_files
fi

if $CLEAN_MEMORY_CACHE; then
    clean_memory_cache
fi

if $ROTATE_LOGS; then
    rotate_logs
else
    clean_package_cache
    clean_crash_reports
    clean_application_logs
    clean_application_caches
    clean_trash
fi

# Send notification if required
if $NOTIFY; then
    send_notification
fi

echo -e "\n${GREEN}✅ Cleanup completed successfully!${RESET}"
exit 0
