# Download node version 16.13.2
FROM node:16.13.2-alpine 
# Define the working directory, in this case, it will create app folder since it doesn't exist in this project, but it will exist in the docker container.
WORKDIR /app
# ! i don't know what this does, i copied it from the internet
ENV PATH /app/node_modules/.bin:$PATH
# it copies package.json into app folder
COPY package.json ./
# and also package-lock.json
COPY package-lock.json ./
# it will install every dependencies from package.json and package-lock.json silently
RUN npm i --silent
# and install react-scripts version 3.4.1 globally and silently
RUN npm i react-scripts@3.4.1 -g --silent
# it copies this project into app folder
COPY . ./
# starts the react app
CMD ["npm","start"]