set -e

if [ -n "$(git status --porcelain)" ]; then
    echo "Working directory is not clean"
    exit
fi

level="minor"
if [[ $1 == "--patch" || $1 == "patch" ]]; then
    level="patch"
fi

npm version $level
if [[ $level == "minor" ]]; then
    npm version $level # for stable releases we increment minor versions by 2 for even numbered releases only
fi

VERSION=`node -p 'require("./package.json").version'`

git commit -am remote-ssh-edit.$VERSION
git tag remote-ssh-edit.$VERSION
