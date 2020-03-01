
## Getting set up for this workshop

First check to see if you have Git, Node.js, and Heroku installed:
`git --version`  
`node --version`  
`heroku --version`  

If needed, [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and/or [Node.js](https://nodejs.org/en/download/).

If you would like to run the remote server example, sign up for a [free Heroku account](https://signup.heroku.com/dc) and [install Heroku](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

We will also be using Cycling 74's Max. If you don't already own a license, [a 30-day demo can be installed](https://cycling74.com/downloads).

Clone the workshop's GitHub repository to a location on your computer:  
`git clone https://github.com/ersheff/node-workshop.git`


## What is Node?

Node.js (Node) is ["an asynchronous event-driven JavaScript runtime... designed to build scalable network applications..."](https://nodejs.org/en/about/)

Basically, it's a way to use JavaScript to make interesting projects. It is especially useful for communicating over networks and over the internet because it can handle input/output and generate HTTP requests to web servers.

Starting with Max 8, Cycling74 included native support for Node in Max, allowing users to launch and control Node applications directly from within their patch.

[Our good buddy Sam](https://youtu.be/RR5AlDgYI2s) describes Node for Max as a swiss army knife that can be used to do increasingly obscure things e.g. "a Max patch that automatically generates names for bespoke potpourri".

The node.script object and [Node for Max API](https://docs.cycling74.com/nodeformax/api/) provide a way for familiar Max objects and workflows to implement and interact with the core functionality of Node.js and its many supplemental libraries.

In this workshop, we will be demonstrating multiple approaches that we have found useful for creating networked performances with Max using Node, including a local client-server application, a remote client-server application, and a web interface.

*Do we want to put examples here?*

## Introduction to Node for Max
## Setting up a local Node for Max client-server
## Creating a remote server on Heroku for your Node for Max client
## Using a web page interface