1. [Getting set up for this workshop](index.md)
2. [What is Node?](2what-is-node.md)
3. [Introduction to Node for Max](3intro-to-node4max.md)
4. [Setting up local Node for Max client-server applications](4local-example.md)
5. [Creating a remote server on Heroku for your Node for Max client](5remote-example.md)
6. [Using a web page interface](6web-interface-example.md)

## Getting set up for this workshop

This workshop will make extensive use of the command line. If you have never or rarely used the command line, never fear - we've all been there.

The default options for using the command line are **Terminal** on **Mac** and **Command Prompt** on **Windows**. The code blocks below (white text on a dark background) should be entered as-is into the command line and executed by pressing the return key.

First check to see if you have Git, Node.js, and Heroku installed:

`git --version`

`node --version`

`heroku --version`

If needed, install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and/or [Node.js](https://nodejs.org/en/download/).

We will be running Node examples locally (on your own computer for communication on a local network) and remotely (hosted on a server elsewhere for communication over the internet). If you would like to run the remote server example in this workshop, sign up for a [free Heroku account](https://signup.heroku.com/dc) and install [Heroku](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

We will also be using Cycling 74's Max. If you don't already own a license, [a 30-day demo can be installed](https://cycling74.com/downloads).

Finally, you should have a decent text editor installed for writing and editing Node scripts. If you don't already have one, we recommend the free [Visual Studio Code](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com), or [Atom](https://atom.io).

Clone the workshop's GitHub repository to a location on your computer:  
`git clone https://github.com/ersheff/node-workshop.git`