#!/bin/bash

# Author: Eshan Roy <eshan@snigdhaos.org>
# Author URI : https://eshanized.github.io

set -e

usage() {
    echo "Usage: ${0##*/} [--email <email>] [--username <username>] [-h]"
    echo "   --email <email>            Set the GitHub user email"
    echo "   --username <email>         Set the GitHub username"
    echo "   -h                         Display the help message"
    exit 1
}

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
            echo "Unknown argument found: $1"
            usage
            ;;
    esac
done

# We will ask prompt for email address if not entered by the user
if [ -z "$EMAIL" ]; then
    read -p "Enter your GitHub Email: " EMAIL
fi

# We will ask prompt for username if not entered by the user
if [ -z "$USERNAME" ]; then
    read -p "Enter your GitHub Username: " USERNAME
fi

# Setting up github config
git config --global user.email "$EMAIL"
git config --global user.name "$USERNAME"

# Get a confirmation message on successful update!
echo "GitHub Configuration setup successfull!"
echo "  User Email: $EMAIL"
echo "  Username: $USERNAME"