#!/bin/bash

set -e

# Define source files and the output package name
sourcefiles="Brave-Browser"

# Extract pkgname, pkgrel, and arch from the PKGBUILD
pkgname=$(grep "^pkgname=" PKGBUILD | awk -F"=" '{print $2}' | xargs)
pkgrel=$(grep "^pkgrel=" PKGBUILD | awk -F"=" '{split($2,a," ");gsub(/"/, "", a[1]);print a[1]}' | xargs)
arch=$(grep "^arch=" PKGBUILD | awk -F"'" '{print $2}' | xargs)

# Check if the necessary source files exist before proceeding
if [ ! -d "$sourcefiles" ]; then
    echo "Error: The source directory '$sourcefiles' does not exist."
    exit 1
fi

# Create the tarball
echo "Creating tarball $pkgname-$pkgrel-$arch.tar.gz..."
tar -zcvf "$pkgname-$pkgrel-$arch.tar.gz" "$sourcefiles"

echo "Tarball $pkgname-$pkgrel-$arch.tar.gz created successfully."
