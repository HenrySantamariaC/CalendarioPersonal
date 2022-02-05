#!/usr/bin/env sh fwef

set -e

git add -A
read -p "Mensaje del commit: "
git commit -m $REPLY
git push -f git@github.com:HenrySantamariaC/CalendarioPersonal.git master

npm run build

cd dist

git init
git add -A
git commit -m 'Despliegue'
git push -f git@github.com:HenrySantamariaC/CalendarioPersonal.git master:gh-pages

cd -
