[![Build Status](https://travis-ci.org/Musikdiscover/web-app.svg?branch=prod)](https://travis-ci.org/Musikdiscover/web-app)

# Musik Quiz Web App
Welcome to the Musik Quiz web app! This simple web application tests your musical knowledge by turning data from the Spotify API into quizzes. Listen to the track and choose which song or piece you think it is. This type of quiz, also known as "Drop the Needle" in musicianship classes, helps train your ear to notice patterns among composers and styles.

## Technologies
Code: ES6, React, SCSS

Testing: Mocha, Chai, ESLint

Tooling: Webpack, NPM, Travis CI, AWS S3

## Installation
This repo uses node 5.x and npm 3.x, so you may need to download a new version of node. The easiest way is to download [nvm](https://github.com/creationix/nvm). There is an `.nvmrc` file in the root of the project, so you can just run `nvm use` to switch to the correct version of node.

Install dependencies by running the following in the root of the project:

- `npm i`
- **Note:** You must use npm 3. Type `npm -v` to ensure you have a 3.x version.

## NPM Commands
- To run locally, run `npm start` and head to `http://localhost:8080/`
- Run tests with `npm test` or use `npm run test:watch` to watch files and rerun tests after any code changes
- To make sure your code passes linting: `npm run lint`
- To create the build: `npm run build`
