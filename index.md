
## Getting set up for this workshop

First check to see if you have Git, Node.js, and Heroku installed:

`git --version`

`node --version`

`heroku --version`  

If needed, install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and/or [Node.js](https://nodejs.org/en/download/).

If you would like to run the remote server example, sign up for a [free Heroku account](https://signup.heroku.com/dc) and install [Heroku](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

We will also be using Cycling 74's Max. If you don't already own a license, [a 30-day demo can be installed](https://cycling74.com/downloads).

Finally, you should have a decent text editor installed for writing and editing Node scripts. If you don't already have one, we recommend the free [Visual Studio Code](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com), or [Atom](https://atom.io).

Clone the workshop's GitHub repository to a location on your computer:  
`git clone https://github.com/ersheff/node-workshop.git`


## What is Node?

Node.js (Node) is ["an asynchronous event-driven JavaScript runtime... designed to build scalable network applications..."](https://nodejs.org/en/about/)

Basically, it's a way to use JavaScript to make interesting projects. It is especially useful for communicating over networks and over the internet because it can handle input/output and generate HTTP requests to web servers.

Starting with Max 8, Cycling '74 included native support for Node in Max, allowing users to launch and control Node applications directly from within their patch.

[Our good buddy Sam](https://youtu.be/RR5AlDgYI2s) describes Node for Max as a swiss army knife that can be used to do increasingly obscure things e.g. create "a Max patch that automatically generates names for bespoke potpourri".

The node.script object and [Node for Max API](https://docs.cycling74.com/nodeformax/api/) provide a way for familiar Max objects and workflows to implement and interact with the core functionality of Node.js and its many supplemental libraries.

In this workshop, we will be demonstrating multiple approaches that we have found useful for creating networked performances with Max using Node, including a local client-server application, a remote client-server application, and a web interface.

*Do we want to put examples here?*



## Introduction to Node for Max

Cycling '74 has some very useful [GitHub repositories](https://github.com/Cycling74) with many examples on how to use Node for Max. The [core examples](https://github.com/Cycling74/n4m-core-examples) repo in particular is a great way to get started.

For the purposes of this workshop, we've condensed a handful of examples useful for basic communication and message handling into a single Max patch and a pair of Node scripts. Navigate to the "node4max-intro" folder in the workshop repo and open the "node4max-intro" patch.



## Setting up local Node for Max client-server applications

Many of you are likely familiar with using OSC to communicate between different local computers running Max or other applications. Another way of doing so is to use Node to write client and server applications. When running these applications locally (on the same wired or wireless network), we only need to launch the server application on one computer and client application on all computers that will be communicating with the server and/or each other. No additional setup is required.

*Can we say more here about how/why using Node is different in a local scenario?*
*Need to add stuff here about web sockets and using the library and npm to install the library*

Navigate to the "max-socketIO-demo-local" folder in the workshop repo and open the "max-socketIO-local" patch.




## Creating a remote server on Heroku for your Node for Max client

*Ideally, we can just write the local example so that the server can be put on heroku and it just works once the address in the client is changed.*
*Eric will take care of getting the patch and script ready*
*Tony, can you write Heroku setup instructions?*

## Using a web page interface

Nick write this part