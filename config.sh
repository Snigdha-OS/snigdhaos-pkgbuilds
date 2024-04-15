#!/bin/bash

# Git Configuration Script

echo "Welcome to Git Configuration Script!"

name="eshanized"
email="m.eshanized@gmail.com"

# Set user name and email
git config --global user.name "$name"
git config --global user.email "$email"

echo "Git configuration completed!"
