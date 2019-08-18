# headers
node project to bunch inspects headers



sudo snap install sublime-text --classic

sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt-get install nodejs
sudo apt install git

node -v
npm -v
git --version

git config --list --show-origin
git config --global user.name "Jan Paul Ettles"
git config --global user.email janpaulettles@gmail.com
git config --global core.editor path_to_editor

git config --list

sudo snap install heroku --classic
heroku login

//create a new repo on github

git clone https://github.com/janpaulettles/headers.git
cd headers

heroku create
git push heroku master
heroku ps:scale web=1
heroku open
heroku logs --tail

npm init --yes


git add .
git commit -m "initial"
git push heroku master

npm install fast-csv



