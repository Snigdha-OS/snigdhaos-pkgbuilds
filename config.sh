#!/bin/bash

# Author: Eshan Roy <eshan@snigdhaos.org>
# Author URI: https://eshanized.github.io

set -e

# Function to display usage instructions
usage() {
    cat <<EOF
Usage: ${0##*/} [--email <email>] [--username <username>] [-h]

Options:
   --email <email>            Set the GitHub user email.
   --username <username>      Set the GitHub username.
   -h, --help                 Display this help message.

Description:
   This script configures your GitHub user.email and user.name settings globally.
   If no arguments are provided, it will prompt for input interactively.

Examples:
   ${0##*/} --email user@example.com --username "Eshan Roy"
EOF
    exit 1
}

# Parse command-line arguments
while [[ "$#" -gt 0 ]]; do
    case "$1" in
        --email)
            EMAIL="$2"
            shift 2
            ;;
        --username)
            USERNAME="$2"
            shift 2
            ;;
        -h|--help)
            usage
            ;;
        *)
            echo "Unknown argument: $1"
            usage
            ;;
    esac
done

# Prompt for email if not provided
if [[ -z "${EMAIL:-}" ]]; then
    read -p "Enter your GitHub Email: " EMAIL
fi

# Prompt for username if not provided
if [[ -z "${USERNAME:-}" ]]; then
    read -p "Enter your GitHub Username: " USERNAME
fi

# Validate email format
if ! [[ "$EMAIL" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo "Error: Invalid email format: $EMAIL"
    exit 1
fi

# Validate username (allowing alphanumerics, dashes, underscores, and dots)
if ! [[ "$USERNAME" =~ ^[a-zA-Z0-9._-]+$ ]]; then
    echo "Error: Invalid username format: $USERNAME"
    exit 1
fi

# Configure GitHub global settings
git config --global user.email "$EMAIL"
git config --global user.name "$USERNAME"

# Display success message
echo -e "\033[1;32mGitHub configuration setup successful!\033[0m"
echo "  User Email:    $EMAIL"
echo "  Username:      $USERNAME"
echo -e "\033[1;36mYou can verify this configuration using the following commands:\033[0m"
echo "  git config --global user.email"
echo "  git config --global user.name"
