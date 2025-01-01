#!/bin/sh
set -e

# Extract fields from PKGBUILD using a more robust approach
pkgname=$(awk -F"=" '/^pkgname=/ {print $2}' PKGBUILD)
pkgrel=$(awk -F"=" '/^pkgrel=/ {gsub(/"/, "", $2); print $2}' PKGBUILD)
arch=$(awk -F"'" '/^arch=/ {print $2}' PKGBUILD)

# Edit this variable to specify source files
sourcefiles="usr"

# Create a compressed tarball of the specified source files
if [ -d "$sourcefiles" ]; then
    echo "[INFO]: Creating source tarball..."
    tar -zcvf "$pkgname.tar.gz" "$sourcefiles"
else
    echo "[ERROR]: Source files directory '$sourcefiles' does not exist."
    exit 1
fi

# Generate the package
echo "[INFO]: Building the package..."
makepkg -f -scr --noconfirm

# Extract pkgver dynamically after package build
pkgver=$(awk -F"=" '/^pkgver=/ {print $2}' PKGBUILD)
pkgfile="$pkgname-$pkgver-$pkgrel-$arch.pkg.tar.zst"

# Clean up generated files and temporary directories
echo "[INFO]: Cleaning up..."
rm -rf src pkg "$pkgname.tar.gz"

# Verify that the package was built successfully
if [ -f "$pkgfile" ]; then
    echo "[INFO]: Package '$pkgfile' built successfully."
else
    echo "[ERROR]: Package build failed."
    exit 1
fi
