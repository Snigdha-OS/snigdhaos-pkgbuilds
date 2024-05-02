#!/bin/bash

# Author    : Eshan Roy
# URI       : https://eshanized.github.io

# NOTE: If you are on Snigdha OS,
# you can install commitizen-go with `sudo pacman -S commitizen-go`
# or `s commitizen-go`. Else you need to install `yay` or `yay-bin`
# to install commitizen. I have written this script only for *Arch Linux.

# Function to check if Commitizen is installed
check_commitizen() {
    if ! pacman -Qq commitizen-go &> /dev/null; then
        echo "Commitizen is not installed. Please install it using 'yay -S commitizen-go'." >&2
        exit 1
    fi
}

# Function to stage, commit, and push changes
push_to_github() {
    git add .
    git cz
    git push origin master
}

# Main Function
main() {
    check_commitizen
    push_to_github
}

main