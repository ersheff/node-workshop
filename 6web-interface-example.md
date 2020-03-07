## Using a web page interface

~~Nick write this part~~

A web page interface (served by a remote server) allows for different interactions/interfaces than previously mentioned. The interface can use common web tools for responsiveness, formatting, and dynamic content. It's possible to still have non-browser based clients (like Max) connect to this server -- to receive server messages.

	For example: 
		Serving a webpage allows for mobile phones, tablets, etc. 

- [ ] Create a webpage where interactions communicate to the server
- [ ] The remote server should point to a webpage
		 
We will use 'Arena Sequencer' as an example of implementing a remote server with a webpage interface and uses Node4Max. *In performance, Arena Sequencer uses Ableton with Max4Live.*

### Remote Server
Please reference the previous pages regarding setting up a remote Heroku server before proceeding. 

## Create a webpage with interaction-based events
- [ ] create an html file
- [ ] include interactive elements (buttons, sliders, text, etc.) 
- [ ] include event messages to server based on interaction (the shown example uses jquery. For examples with js: https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35)
- [ ] 


## Webpage hosted on server
The server from previous examples can augmented to:

- Serve a webpage
- That webpage should, based on interactions on the page, send messages to server.

### How to:
Serve a webpage:
The server should point visitors to a webpage. This example shows how to point visitors to a 'public' folder. 

Refer to the image -- as your object reference may be different the this example. The following line points visitors to a folder 'public', where our 'index.html' webpage is located.

>
app.use(express.static(path.join(__dirname, 'public')));

### node/socket events based on page 
