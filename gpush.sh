#!/bin/bash

# Iconized

pull_from_github(){
    git pull
}

push_to_github() {
    # git pull
    git add .
    ezcommits
    git push -u origin master
}

main(){
    pull_from_github
    push_to_github
}

main