# Snigdha OS PKGBUILDs

This repository contains a collection of PKGBUILDs designed to package software for **Snigdha OS**, a custom Linux distribution. The PKGBUILDs here follow the Arch Linux packaging standards, ensuring that the software integrates well with the system and is easily installable using `pacman` or the `makepkg` utility.

## Features

- **Custom PKGBUILDs**: Pre-configured packages optimized for Snigdha OS.
- **Software Selection**: Includes essential packages, utilities, and custom tools for Snigdha OS users.
- **Ease of Installation**: Supports simple installation via Arch's `makepkg` utility.
  
## Installation

To install packages from this repository:

1. Clone the repository:

   ```bash
   git clone https://github.com/Snigdha-OS/snigdhaos-pkgbuilds
   ```

2. Navigate into the directory and build the package:

   ```bash
   cd snigdhaos-pkgbuilds
   makepkg -si
   ```

   This will build and install the packages on your system. For each package, ensure all dependencies are met before building.

## Contributing

We welcome contributions! If you have a package you'd like to add or a fix for an existing one, please feel free to submit a pull request.

- Fork the repository
- Make your changes in a new branch
- Test the PKGBUILD
- Submit a pull request

Make sure your contribution follows the style and packaging guidelines of Snigdha OS.

## Support

For issues related to Snigdha OS PKGBUILDs, please open an issue in the repository. If you need more detailed guidance on creating or customizing PKGBUILDs, consult the [Arch Wiki](https://wiki.archlinux.org/title/PKGBUILD).

## License

The code in this repository is licensed under the MIT License. See the `LICENSE` file for more details.

## Additional Resources

- [Snigdha OS GitHub](https://github.com/Snigdha-OS)
- [Arch Wiki on PKGBUILDs](https://wiki.archlinux.org/title/PKGBUILD)
