#!/bin/bash

# Author        : ESHAN ROY
# Author URI    : https://eshanized.github.io

# Define the conventional commit types with new emojis
TYPES=("🚀 feat" "🐛 fix" "📝 docs" "✨ style" "🛠 refactor" "⚡️ perf" "🔬 test" "🔧 build" "🤖 ci" "🧹 chore" "⏪ revert")

# Function to display an error and exit
error_exit() {
    echo -e "\033[1;31m[ERROR]\033[0m $1"  # Prints the error message in red color
    exit 1  # Exits the script with a non-zero status
}

# Ensure the script is run in a Git repository
git rev-parse --is-inside-work-tree > /dev/null 2>&1 || error_exit "This is not a Git repository."

# Get the current branch name using Git
branch=$(git rev-parse --abbrev-ref HEAD)

# Pull the latest changes from the remote repository to stay up-to-date
echo "Pulling latest changes from remote branch '$branch'..."
git pull origin "$branch" || error_exit "Failed to pull changes from the remote repository. Please resolve any conflicts manually."

# Check if there are any changes to commit (both staged and unstaged)
if git diff --quiet && git diff --cached --quiet; then
    error_exit "No changes detected to commit."  # If no changes, exit the script
fi

# Prompt the user to select a commit type from the predefined list of types
echo "Select a commit type:"
select type in "${TYPES[@]}"; do
    if [[ -n "$type" ]]; then  # If a valid selection is made, break the loop
        break
    else
        echo "Invalid selection. Please try again."  # If invalid, prompt again
    fi
done

# Extract the commit type (e.g., "feat") and emoji (e.g., "🚀") from the selected type
type_emoji=${type}  # The full emoji and type (e.g., "🚀 feat")
type=${type_emoji#* }  # Extract the commit type (e.g., "feat") by removing the emoji
emoji=${type_emoji% *}  # Extract the emoji (e.g., "🚀") by removing the type

# Prompt the user to enter a short description for the commit
read -p "Enter a short description: " desc
if [ -z "$desc" ]; then  # If the description is empty, exit with an error
    error_exit "A short description is required!"
fi

# Prompt the user to enter a longer description (optional)
read -p "Enter a longer description (optional): " long_desc

# Create the commit message using the emoji, type, and description
commit_msg="$emoji $type: $desc"

# If the user provided a longer description, append it to the commit message
if [ -n "$long_desc" ]; then
    commit_msg+="\n\n$long_desc"  # Adds the longer description to the commit message
fi

# Print the commit message to the console for review
echo -e "\nCommit message:"
echo -e "\033[1;36m$commit_msg\033[0m"  # Prints the commit message in cyan color

# Stage all changes for commit
git add .

# Commit the changes with the constructed commit message
if git commit -m "$commit_msg"; then
    echo -e "\033[1;32mCommit successful!\033[0m"  # If commit is successful, print success message in green
else
    error_exit "Commit failed. Please check your changes and try again."  # If commit fails, show error and exit
fi

# Push the changes to the remote repository
echo "Pushing changes to remote branch '$branch'..."
if git push origin "$branch"; then
    echo -e "\033[1;32mChanges pushed to remote branch '$branch'.\033[0m"  # If push is successful, print success message in green
else
    error_exit "Push failed. Please check your connection or branch permissions."  # If push fails, show error and exit
fi
