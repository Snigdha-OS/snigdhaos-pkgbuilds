#!/bin/bash

# Author: Eshan Roy
# Description: Backup important Snigdha OS system configurations and settings

set -e  # Exit immediately if a command exits with a non-zero status

# Colors
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
RESET="\033[0m"

# Emojis for user feedback
INFO="📝"
SUCCESS="✅"
WARNING="⚠️"
ERROR="❌"
BACKUP="💾"

# Directories and files to be backed up
BACKUP_DIR="$HOME/snigdhaos_backups"
DATE=$(date +"%Y-%m-%d_%H-%M-%S")
SNIGDHAOS_BACKUP="$BACKUP_DIR/snigdhaos_backup_$DATE"
LOG_FILE="$BACKUP_DIR/backup_log_$DATE.txt"

# List of important configuration directories and files
CONFIG_FILES=(
    "/etc/pacman.conf"
    "/etc/fstab"
    "/etc/locale.conf"
    "/etc/vconsole.conf"
    "/etc/hostname"
    "/etc/hosts"
    "/etc/sudoers"
    "/etc/systemd/system"
    "/etc/X11/xorg.conf.d"
    "/etc/udev"
    "/etc/NetworkManager"
    "/etc/crypttab"
    "/etc/mkinitcpio.conf"
    "/etc/pm.conf"
    "$HOME/.bashrc"
    "$HOME/.zshrc"
    "$HOME/.config/i3"
    "$HOME/.config/sway"
    "$HOME/.config/kitty"
    "$HOME/.config/nvim"
    "$HOME/.config/alacritty"
    "$HOME/.config/rofi"
)

# Function to display help message
show_help() {
    echo -e "${BLUE}Usage: ${RESET}snigdhaos-backup.sh [OPTIONS]"
    echo -e ""
    echo -e "${GREEN}This script will back up important Snigdha OS system configuration files and settings.${RESET}"
    echo -e ""
    echo -e "${YELLOW}Options:${RESET}"
    echo -e "  ${GREEN}-h, --help${RESET}            Show this help message."
    echo -e "  ${GREEN}-v, --version${RESET}         Display the script version."
    echo -e "  ${GREEN}-b, --backup-dir${RESET}      Specify a custom backup directory (default: \$HOME/snigdhaos_backups)."
    echo -e "  ${GREEN}-l, --list${RESET}            List the files that will be backed up."
    echo -e "  ${GREEN}-e, --encrypt${RESET}         Encrypt the backup with GPG."
    echo -e "  ${GREEN}-c, --compression${RESET}     Choose compression format (gzip, xz, bz2)."
    echo -e "  ${GREEN}-r, --restore${RESET}         Restore backup from a specified file."
    echo -e ""
    echo -e "Example usage:"
    echo -e "  snigdhaos-backup.sh -e          # Create an encrypted backup."
    echo -e "  snigdhaos-backup.sh -l          # List files to be backed up."
    echo -e "  snigdhaos-backup.sh -b /path/to/dir   # Specify a custom backup directory."
}

# Function to display version information
show_version() {
    echo -e "${BLUE}Version: 1.1.0${RESET}"
}

# Parse command line options
CUSTOM_BACKUP_DIR=false
LIST_FILES=false
ENCRYPT_BACKUP=false
COMPRESSION_FORMAT="gz"
RESTORE=false
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
        -b|--backup-dir)
            CUSTOM_BACKUP_DIR=true
            BACKUP_DIR="$2"
            shift
            ;;
        -l|--list)
            LIST_FILES=true
            shift
            ;;
        -e|--encrypt)
            ENCRYPT_BACKUP=true
            shift
            ;;
        -c|--compression)
            COMPRESSION_FORMAT="$2"
            shift
            ;;
        -r|--restore)
            RESTORE=true
            BACKUP_FILE="$2"
            shift
            ;;
        *)
            echo -e "${ERROR} Unknown option: $1${RESET}"
            show_help
            exit 1
            ;;
    esac
done

# Ensure backup directory exists
mkdir -p "$BACKUP_DIR"

# Function to display a user warning
user_warning() {
    echo -e "${WARNING} WARNING: You are about to proceed with the backup or restoration process.${RESET}"
    echo -e "${YELLOW}This action may overwrite existing backup data or restore files from a previous backup.${RESET}"
    read -p "Do you want to continue? (y/n): " user_input
    if [[ ! "$user_input" =~ ^[Yy]$ ]]; then
        echo -e "${ERROR} Operation aborted by user.${RESET}"
        exit 1
    fi
}

# Function to list files to be backed up
list_files() {
    echo -e "${INFO} The following files and directories will be backed up:${RESET}"
    for item in "${CONFIG_FILES[@]}"; do
        echo -e "${GREEN}  - $item${RESET}"
    done
}

# Function to backup a file or directory
backup_item() {
    local item="$1"
    if [ -e "$item" ]; then
        echo -e "${INFO} Backing up $item...${RESET}" | tee -a "$LOG_FILE"
        cp -r "$item" "$SNIGDHAOS_BACKUP" | tee -a "$LOG_FILE"
    else
        echo -e "${WARNING} Warning: $item not found. Skipping.${RESET}" | tee -a "$LOG_FILE"
    fi
}

# Function to create a compressed backup tarball
create_tarball() {
    echo -e "${INFO} Creating $COMPRESSION_FORMAT tarball of backup...${RESET}" | tee -a "$LOG_FILE"
    case "$COMPRESSION_FORMAT" in
        gz) tar -czf "$BACKUP_DIR/$TAR_NAME" -C "$BACKUP_DIR" . | tee -a "$LOG_FILE" ;;
        xz) tar -cJf "$BACKUP_DIR/$TAR_NAME" -C "$BACKUP_DIR" . | tee -a "$LOG_FILE" ;;
        bz2) tar -cjf "$BACKUP_DIR/$TAR_NAME" -C "$BACKUP_DIR" . | tee -a "$LOG_FILE" ;;
        *) echo -e "${ERROR} Invalid compression format! Using gzip by default." | tee -a "$LOG_FILE" ;;
    esac
}

# Function to encrypt the backup
encrypt_backup() {
    if $ENCRYPT_BACKUP; then
        echo -e "${INFO} Encrypting the backup...${RESET}" | tee -a "$LOG_FILE"
        gpg --symmetric --cipher-algo AES256 "$BACKUP_DIR/$TAR_NAME" | tee -a "$LOG_FILE"
        rm "$BACKUP_DIR/$TAR_NAME"
        echo -e "${SUCCESS} Backup encrypted successfully!" | tee -a "$LOG_FILE"
    fi
}

# Function to restore a backup
restore_backup() {
    echo -e "${INFO} Restoring backup from $BACKUP_FILE...${RESET}" | tee -a "$LOG_FILE"
    tar -xvf "$BACKUP_FILE" -C "$HOME" | tee -a "$LOG_FILE"
    echo -e "${SUCCESS} Restore completed successfully!" | tee -a "$LOG_FILE"
}

# Backup process
backup_process() {
    echo -e "${INFO} Starting backup process...${RESET}" | tee -a "$LOG_FILE"

    # Loop through the list of configuration files and directories
    for item in "${CONFIG_FILES[@]}"; do
        backup_item "$item"
    done

    # Create a tarball for easy backup storage
    TAR_NAME="snigdhaos_backup_$DATE.tar.$COMPRESSION_FORMAT"
    create_tarball
    encrypt_backup
    echo -e "${SUCCESS} Backup completed successfully! Backup is located at: $BACKUP_DIR/$TAR_NAME" | tee -a "$LOG_FILE"
}

# List files to be backed up if --list is passed
if $LIST_FILES; then
    list_files
    exit 0
fi

# Start backup or restore process
if $RESTORE; then
    user_warning
    restore_backup
else
    user_warning
    echo -e "${INFO} Preparing backup...${RESET}" | tee -a "$LOG_FILE"
    SNIGDHAOS_BACKUP="$BACKUP_DIR/snigdhaos_backup_$DATE"
    backup_process
fi
