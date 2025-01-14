#!/bin/bash

set -e

sourcefiles="google-chrome"

pkgname=$(grep "^pkgname=" PKGBUILD | awk -F"=" '{print $2}')
pkgrel=$(grep "^pkgrel=" PKGBUILD | awk -F"=" '{split($2,a," ");gsub(/"/, "", a[1]);print a[1]}')
arch=$(grep "^arch=" PKGBUILD | awk -F"'" '{print $2}')

tar -zcvf $pkgname.tar.gz $sourcefiles 
