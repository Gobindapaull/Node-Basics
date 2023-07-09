# Node Basics
 Node js

Using nvm:  
NVM (Node Version Manager) is a tool that allows you to manage multiple versions of Node on your system. You can use nvm to install, update, and switch between different versions of Node.

To update your version of Node using nvm, do the following:

nvm --version

If it's not installed, install nvm using this command:    
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

Once nvm is installed, check your current version of Node by running the following command:
node -v

Then update your version of Node using the following command:  
nvm install node --reinstall-packages-from=node

And finally, verify that your update is complete by rechecking your Node version:  
node -v
