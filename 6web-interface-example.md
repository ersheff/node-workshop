![remote server web](/images/Remote-web@2x)
## Using a web page interface

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
- [ ] include event messages to server based on interaction 

	
### Create an html file
The bare minimum for this demo is a button element with an assigned id. 

[Link to Arena Sequencer's HTML page.](/remote-server-web-demo/public/index.html)

![buttons-with-id](/images/buttons-with-id.png)

Notice the button elements near the bottom of the image with id tags of `'inc-button1'`, `'inc-button2'`.

Based on the button element's `id`, we can use their button interactions to trigger an event that sends (emits) a message to the server. 

You can have the code that connects the button interaction on the HTML or a referenced separate file. Notice the line below that is included in the HTML file -- this is a reference to the button element interaction event and messages to the server code: 

  `<script src="/moxsonic-controller.js"></script>`

Link to the [moxsonic-controller.js file](/remote-server-web-demo/public/moxsonic-controller.js). 

![jquery-events](/images/jquery-events.png)

This example uses jquery. 

An example for js:

`const incButton1 = document.getElementById('inc-button1');`
`incButton1.addEventListener('click', function(e) {`
  `console.log('increment button 1 was clicked');`
`});`

For examples with js: https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35)



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
