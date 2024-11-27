#!/bin/bash

# Author        : ESHAN ROY
# Author URI    : https://eshanized.github.io

# NOTE : Run at your own risk!

# Define the conventional commit types with new emojis
TYPES=("🚀 feat" "🐛 fix" "📝 docs" "✨ style" "🛠 refactor" "⚡️ perf" "🔬 test" "🔧 build" "🤖 ci" "🧹 chore" "⏪ revert")

# Function to display an error and exit
error_exit() {
    echo -e "\033[1;31m[ERROR]\033[0m $1"
    exit 1
}

# Ensure the script is run in a Git repository
git rev-parse --is-inside-work-tree > /dev/null 2>&1 || error_exit "This is not a Git repository."

# Prompt the user to select a commit type
echo "Select a commit type:"
select type in "${TYPES[@]}"; do
    if [[ -n "$type" ]]; then
        break
    else
        echo "Invalid selection. Please try again."
    fi
done

# Extract the commit type and emoji from the selection
type_emoji=${type}
type=${type_emoji#* }
emoji=${type_emoji% *}

# Prompt the user to enter a scope (optional)
read -p "Enter a scope (optional): " scope
scope_part=""
if [ -n "$scope" ]; then
    scope_part="($scope)"
fi

# Prompt the user to enter a short description
read -p "Enter a short description: " desc
if [ -z "$desc" ]; then
    error_exit "A short description is required!"
fi

# Prompt the user to enter a longer description (optional)
read -p "Enter a longer description (optional): " long_desc

# Create the commit message
commit_msg="$emoji $type$scope_part: $desc"

# If a longer description was provided, add it to the commit message
if [ -n "$long_desc" ]; then
    commit_msg+="

$long_desc"
fi

# Print the commit message to the console
echo -e "\nCommit message:"
echo -e "\033[1;36m$commit_msg\033[0m"

# Confirm before committing
read -p "Do you want to proceed with this commit? (y/n): " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
    echo "Commit aborted."
    exit 0
fi

# Stage all changes
git add .

# Commit the changes with the conventional commit message
if git commit -m "$commit_msg"; then
    echo -e "\033[1;32mCommit successful!\033[0m"
else
    error_exit "Commit failed."
fi

# Push the changes to the remote repository
branch=$(git rev-parse --abbrev-ref HEAD)
if git push origin "$branch"; then
    echo -e "\033[1;32mChanges pushed to remote branch '$branch'.\033[0m"
else
    error_exit "Push failed. Please check your connection or branch permissions."
fi
