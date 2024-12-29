#!/bin/bash

# ✨ Script Developed by: D3V1L0N ✨
# 🌟 Version: 1.0 🌟

echo "────────────────────────────────────────────────────────────────────"
echo "🎉 Hard Reset Script for Snigdha OS 🎉"
echo "👨‍💻 Developed by: D3V1L0N"
echo "────────────────────────────────────────────────────────────────────"

read -p "⚠️ WARNING: This script will reset the system by removing non-essential packages and overwriting configurations. Do you want to continue? (y/n): " confirm
if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "🚨 Operation aborted by user. Exiting... 🚨"
    exit 1
fi

essential_packages=(
    base
    base-devel
    linux
    linux-firmware
    systemd
    grub
    mkinitcpio
    udev
    vi
    coreutils
    bash
)

is_essential() {
    for pkg in "${essential_packages[@]}"; do
        if [[ "$1" == "$pkg" ]]; then
            return 0
        fi
    done
    return 1
}

echo "🌐 Updating package database..."
pacman -Sy --noconfirm

installed_packages=$(pacman -Qq)

echo "🧹 Cleaning up: Removing non-essential packages..."
for pkg in $installed_packages; do
    if ! is_essential "$pkg"; then
        echo "🗑️ Removing package: $pkg"
        pacman -Rns --noconfirm "$pkg"
    fi
done

echo "⚙️ Resetting configuration files..."
echo "⚠️ WARNING: Resetting /etc will overwrite existing configurations! Backup any important configs before proceeding."
read -p "Are you sure you want to continue with the hard reset and overwrite /etc configuration files? (y/n): " confirm
if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "🚨 Operation aborted by user. Exiting... 🚨"
    exit 1
fi

rm -rf /etc/*
cp -r /etc/skel/* /etc/

echo "🔄 Reinstalling essential packages..."
for pkg in "${essential_packages[@]}"; do
    pacman -S --noconfirm --needed "$pkg"
done

echo "🔧 Rebuilding initramfs..."
mkinitcpio -P

echo "🎉 Hard reset complete! Essential packages reinstalled, system cleaned, and ready to go. 🚀"

echo "🔄 It's recommended to reboot your system now for changes to take effect."
