#!/bin/bash

#-----------------------------------------------------------
# Script to generate a list of package details from a mirror URL
# Author: RiO <d3v1l0n@outlook.in>
# Date: 2024-12-27
# Description: This script fetches the list of package filenames
# from a specified mirror and processes them into a clean output.
#-----------------------------------------------------------

# Mirror URL
mirror_url="https://github.com/SnMirror/snigdhaos-core/tree/master/x86_64"

# Output file
output_file="packages.txt"

# Function to install curl if not installed (for Arch Linux)
install_curl() {
    echo "curl is not installed. Attempting to install..."

    # Check if the system is using the pacman package manager (Arch Linux)
    if command -v pacman &> /dev/null; then
        sudo pacman -Sy --noconfirm curl
    else
        echo "Error: Could not detect pacman package manager. Please install curl manually."
        exit 1
    fi

    # Verify if curl was successfully installed
    if command -v curl &> /dev/null; then
        echo "curl has been installed successfully."
    else
        echo "Error: Failed to install curl. Please install it manually."
        exit 1
    fi
}

# Function to fetch and process package list
fetch_packages() {
    # Check if curl is installed
    if ! command -v curl &> /dev/null; then
        install_curl
    fi

    # Fetch package list and process filenames
    curl -s "$mirror_url" | \
    grep -oP '(?<=href=")[^"]+\.pkg\.tar\.zst' | \
    awk -F'-' '{OFS="-"; print $1, $2, $3}' > "$output_file"

    # Check if the output file is generated successfully
    if [[ $? -eq 0 ]]; then
        echo "Generated $output_file with all package details."
    else
        echo "Error: Failed to generate the package list."
        exit 1
    fi
}

# Run the function
fetch_packages
