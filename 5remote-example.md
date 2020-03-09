1. [Getting set up for this workshop](index.md)
2. [What is Node?](2what-is-node.md)
3. [Introduction to Node for Max](3intro-to-node4max.md)
4. [Setting up local Node for Max client-server applications](4local-example.md)
5. [Creating a remote server on Heroku for your Node for Max client](5remote-example.md)
6. [Using a web page interface](6web-interface-example.md)

![remote server web](/images/Remote@2x.png)

## Example client and server code for the remote networked Node setup used in the piece Hydrokardia can be found here:
[Server - hosted on Heroku](https://github.com/ersheff/hydrokardia-server)
[Client - including performance patches](https://github.com/ersheff/interdependent-series/tree/master/Hydrokardia)

## Creating a remote server on Heroku for your Node for Max client
Once you’ve built your server and tested it locally, you can host it online and have clients connect to it remotely using a hosting service like Heroku. Here are some steps on how to host your Node server on Heroku:

* First, create a Github repo for your project files and [sign up with Heroku](https://signup.heroku.com/). Once you’ve signed up, [download the command line interface tools here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

* Now that we’ve got the basics set up, let's take the `max-socketIO—local-server.js` file we used earlier and get it ready for remote hosting. 
	* Create a new directory and recreate the `max-socketIO-sever.js` file. Rename it `max-socketIO—heroku-sever.js` just for clarity.
	* You’ll need to build a new `package.json` file by running  `npm init`  in this directory.
	* Next, we’ll install any dependency packages that we need for our app to work. For this example, we need express and socket.io. So let’s run `npm install express --save `  and `npm install socket.io --save`   The MaxAPI will only be used by our client patch, so the server won’t need it.
	* Open up your `package.json` file and your should now see a section that lists you’re dependencies. 
	* There’s one last thing we’ll need to add to our package file: a  `start` script that specifies which file Node will run once Heroku fires up the server. For this example, you should add the following into your `package.json` file:
```
"scripts":{
	"start": "node max-socketIO-heroku-server.js"
},	
```
* Once the package file is built, let’s install these dependencies into our app directory. In your terminal, run `npm install`.
* When the install finishes, fire up your server locally to make sure everything works properly on your own computer.  Heroku includes its own testing script that you can use to do this by running `heroku local web` in your terminal.
* Since it’s a good idea to push this entire project to Github eventually, we should take care of one last step before finally putting our server app on Heroku. In your app’s directory, create a new file named `.gitignore`. This file will keep track of items in our directory that we don’t want pushed to our git repo. Ideally, we don’t want any copies of our node modules or build artifacts being hosted on Github, so open the `.gitignore` file and add:
```
/node_modules
npm-debug.log
.DS_Store
/*.env
```
* At this point you should commit all of your changes to your git repo (learn about doing that [here](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)), but for now we’ll jump right into deploying this server to Heroku.
	* In your app’s directory,  run `heroku login` and  press any key to open a browser window. Enter your login credentials when prompted.
	* Next, run `heroku create`  to publish your app to Heroku. 
	* You can change the default name that Heroku assigns to your app by running `heroku apps:rename ` followed by the new name that you’d prefer, the --app flag and the old name assigned to your app by Heroku. Here’s an example:
	`heroku apps:rename noderemoteworkshop --app damp-reef-50960`

