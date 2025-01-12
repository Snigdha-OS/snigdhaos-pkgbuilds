# Snigdha OS PKGBUILDs 🚀

<p align="center">  
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT"></a>  
  <a href="https://github.com/Snigdha-OS/snigdhaos-pkgbuilds/releases"><img src="https://img.shields.io/github/v/release/Snigdha-OS/snigdhaos-pkgbuilds?style=for-the-badge" alt="Latest Release"></a>  
  <a href="https://github.com/Snigdha-OS/snigdhaos-pkgbuilds/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge" alt="Contributions Welcome"></a>  
  <a href="https://github.com/Snigdha-OS/snigdhaos-pkgbuilds/actions"><img src="https://img.shields.io/github/actions/workflow/status/Snigdha-OS/snigdhaos-pkgbuilds/cz.yml?branch=master&style=for-the-badge" alt="Build Status"></a>  
  <a href="https://snigdha-os.github.io"><img src="https://img.shields.io/website?url=https%3A%2F%2Fsnigdha-os.github.io&style=for-the-badge" alt="Website Status"></a>  
</p>  

Welcome to the Snigdha OS PKGBUILDs repository! This repository contains the PKGBUILD scripts used to create and package software for Snigdha OS, a lightweight and customizable Arch-based Linux distribution.

## Table of Contents 📑

- [Overview](#overview)
- [Developers](#developers)
- [Technologies Used](#technologies-used)
- [Repository Structure](#repository-structure)
- [Development Guide](#development-guide)
- [Contributing](#contributing)
- [License](#license)

## Overview 🌟

Snigdha OS PKGBUILDs provides a collection of PKGBUILD scripts used to package applications and utilities for Snigdha OS. The repository includes software that enhances the user experience and ensures compatibility with Snigdha OS’s package management system. These PKGBUILDs allow users to easily install and maintain software through `pacman` or the Arch User Repository (AUR).

This repository is a crucial part of Snigdha OS's ecosystem, ensuring that Snigdha OS users can seamlessly install and update software packages.

## Developers 👨‍💻👩‍💻

Below is the list of developers contributing to the Snigdha OS PKGBUILDs:

- **eshanized** - Lead Developer, Package Manager and Architecture 🛠️

If you'd like to contribute or join the team, feel free to reach out! 🌍

## Technologies Used ⚙️

The Snigdha OS PKGBUILDs repository primarily relies on the following technologies:

- **PKGBUILD**: The main format used by Arch Linux and derivatives for packaging software. PKGBUILD scripts define how to download, build, and install packages. 📦
- **makepkg**: A tool used to automate the process of creating Arch Linux packages from PKGBUILD scripts. 🛠️
- **pacman**: The package manager for Arch Linux and its derivatives, used for installing, updating, and managing software packages. 🗂️
- **Git**: A version control system for tracking changes and collaborating on the repository. 🔄
- **AUR (Arch User Repository)**: A community-driven repository of packages that Arch users can access for installing and maintaining packages. 🌐

## Repository Structure 📂

The directory structure of this repository is organized as follows:

```
snigdhaos-pkgbuilds/
├── PKGBUILDs/                # Directory containing individual PKGBUILD files for software packages
│   ├── package1/             # Directory for a single package (e.g., package1)
│   │   └── PKGBUILD          # PKGBUILD script for package1
│   ├── package2/             # Directory for another package (e.g., package2)
│   │   └── PKGBUILD          # PKGBUILD script for package2
│   └── ...
├── README.md                 # This README file
└── LICENSE                   # Project license file
```

### Explanation of the Structure:

- **PKGBUILDs/**: This folder contains individual directories for each software package. Each package directory holds its corresponding `PKGBUILD` file.
- **package1/**, **package2/**, etc.: These are individual directories for each package. You can add new directories for other packages with their respective `PKGBUILD` files.
- **README.md**: The file you are currently reading, providing essential information about the repository.
- **LICENSE**: The license file for the project.

## Development Guide 📝

### Prerequisites ⚡

To contribute to this repository, you’ll need:

- A working installation of Snigdha OS or any Arch-based Linux distribution. 🖥️
- Familiarity with the PKGBUILD format and the packaging process in Arch Linux. 📚
- **Git** for version control. 🔧
- **makepkg** and **pacman** to build and install packages locally. 🔨

### Setting Up the Development Environment 🛠️

1. Clone the repository:
   ```bash
   git clone https://github.com/Snigdha-OS/snigdhaos-pkgbuilds.git
   cd snigdhaos-pkgbuilds
   ```

2. Create a new branch for your changes:
   ```bash
   git checkout -b feature-name
   ```

3. Add or modify the PKGBUILD scripts as needed. Ensure that the scripts follow the correct format and best practices outlined by the Arch Wiki. 📋

4. Test the PKGBUILD by building the package locally:
   ```bash
   makepkg -si
   ```

5. Push your changes to your fork:
   ```bash
   git push origin feature-name
   ```

6. Open a pull request to merge your changes into the main repository. 🔄

### Contribution Guidelines 🧑‍🤝‍🧑

- **Fork the repository** and clone it locally. 🍴
- Create a new branch for each feature or bug fix:
  ```bash
  git checkout -b feature-name
  ```
- Make your changes, commit them with clear and descriptive commit messages. 💬
- Push your changes to your fork and create a pull request to the `main` branch. 🔀

### Code Style and Best Practices 📐

- Follow the [PKGBUILD standards](https://wiki.archlinux.org/title/PKGBUILD) outlined by Arch Linux. 📘
- Use meaningful variable names and add comments to complex parts of the PKGBUILD script. ✍️
- Test all changes locally before submitting a pull request. ✅
- Make sure the PKGBUILD script passes checks and installs correctly on Snigdha OS. ✔️

## Contributing 💪

We welcome contributions to Snigdha OS PKGBUILDs! If you want to contribute, please follow these steps:

1. Fork the repository and clone it locally. 🍴
2. Create a branch for your changes. 🔄
3. Modify or add PKGBUILD scripts and test them. 🛠️
4. Submit a pull request with a detailed description of the changes. 📥

If you have any ideas, suggestions, or issues, feel free to open an issue or start a discussion! 🗣️

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.


Thanks for contributing to Snigdha OS PKGBUILDs! 🙏
