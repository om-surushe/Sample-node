FROM node:18.13

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . .

# # Always good to specific so that it doesn't later break
# FROM node:18.13
# # This folder will all commands be run in, like the HOME folder
# WORKDIR /app
# # Add our sourcecode
# ADD . /app
# # The command to start our container
# CMD node server.js WCn4+;HM7psM#KD
PORT 3000
CMD ["npm", "start"]