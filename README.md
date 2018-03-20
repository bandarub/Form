# Form

This guide will teach you basic steps to install React 

How to install Node.js and npm
How npm is different than what you may be used to.
How to create a package.json file, and what that means.
How to install the React and ReactDOM libraries.

INSTALLING NODE AND NPM
Getting React up and running is not as simple as downloading one large piece of software. You will need to install many, smaller software packages.

The first thing to install is a good installer! You need a way to download and install software packages easily, without having to worry about dependencies.

In other words, you need a good package manager. We'll be using a popular package manager named npm. npm is a great way to download, install, and keep track of JavaScript software.

You can install npm by installing Node.js. Node.js is an environment for developing server-side applications. When you install Node.js, npm will install automatically.

Here is the link to download Node.js
https://nodejs.org/en/




Alright, let's make a React app on your home computer! Where do you start?

To begin, decide where you want to save your app, and what you want to name it. In the terminal, cd to wherever you want to save your app. Use mkdir to make a new directory with your app's name. cd into your new directory.

Once you've done all that, type this command into your terminal:

$npm_init

You will get a lot of prompts! You can answer them, but it's also safe to just keep hitting return and not worry about it.

Once the prompts are done, use your favorite text editor to open all of the files in your project's root directory. You could do this with a terminal command such as atom . or subl .. You will see that a new file named package.json has been created!

What just happened?

The command npm init automatically creates a new file named package.json. package.json contains metadata about your new project.

Soon, you will install more npm modules. package.json keeps track of the modules that you install. Other developers can look at your package.json file, easily install the same modules that you've installed, and run their own local versions of your project! This is fantastic for collaborating.

You don’t need to install or configure tools like Webpack or Babel.
They are preconfigured and hidden .

Just create a project, and you’re good to go.

INSTALL REACT
Type below command in command line prompt to install React(Here my application name is "Table-app"

$npx create-react-app Table-app
$cd Table-app
$npm start

Here I have installed several other packages to react, Below are the list of packages I have used and their syntax

Installing Material-UI table to save list of participants in the form of table

$npm install material-ui-table

Also installed Lodash packages using folloing syntax

$npm install lodash --save

Other plugins  installed for this applications are

$npm install eslint-plugin-flowtype
$npm install eslint-plugin-import
$npm install eslint-plugin-jsx-a11y
$npm install eslint-plugin-react
$npm install react-tap-event-plugin




