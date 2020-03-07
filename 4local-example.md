## Setting up local Node for Max client-server applications

Many of you are likely familiar with using OSC to communicate between different local computers running Max or other applications. Another way of doing so is to use Node to write client and server applications. When running these applications locally (on the same wired or wireless network), we only need to launch the server application on one computer and client application on all computers that will be communicating with the server and/or each other. The server computer can also run an instance of the client if desired. No additional setup is required.

You might be wondering "why would I use Node on a local network when I can just use OSC?" Good question. Primarily, you may find that the client-server arrangement is the best fit for a scenario with multiple local users e.g. a laptop ensemble. With its many libraries, Node also enables extended functionality e.g launch other processes on your computer from within Max, automatically pull system information like your IP address, or post Tweets during your performance. Finally, although our findings on this are inconclusive, it seems that we have had more success using Node rather than OSC for network communcation on some institutional networks. 

Speaking of libraries, our client and server scripts are dependent on the [socket.io](https://socket.io) and [http](https://nodejs.org/api/http.html) libraries. We've already seen how libraries are included in Node scripts when adding the Node for Max API to the top of our previous examples. We'll need to include socket.io and http libraries the same way, but they are not bundled in Max or in the default Node installation, so we need to install them separately.

This has already been done in the files for this workshop, but if you ever need to install any additional libraries, npm (Node package manaeger) makes it very easy and IS installed by default with Node.

So, for example, if you needed to install socket.io in the future, you would run:
`npm install socket.io`

Then, socket.io would be available to the Node scripts that you write, provided you run them from the same directory.

To try out the local network example, navigate to the "max-net-local-demo" folder in the workshop repo.

Start by launching the "max-net-local-server" script from the command line:
`node path-to-server/max-net-local-server.js`

Then, open the "max-net-local-client.js" file and change the server address (hostname or IP) and port as needed. When the server is launched, it will report the computer's hostname and port.

Now, open the "max-net-local.maxpat" patch and try it out.