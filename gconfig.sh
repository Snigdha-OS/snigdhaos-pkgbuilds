#!/bin/bash

# Setup Git Credentials

# Git Credential
username="Abhiraj Roy"
useremail="157954129+iconized@users.noreply.github.com"

# Git Config
git config --global user.name "$username"
git config --global user.email "$useremail"

echo -e "\033[0;32mSuccessfully Setup Git Credentials :)"