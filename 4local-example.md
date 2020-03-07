## Setting up local Node for Max client-server applications

Many of you are likely familiar with using OSC to communicate between different local computers running Max or other applications. Another way of doing so is to use Node to write client and server applications. When running these applications locally (on the same wired or wireless network), we only need to launch the server application on one computer and client application on all computers that will be communicating with the server and/or each other. The server computer can also run an instance of the client if desired. No additional setup is required.

You might be wondering "why would I use Node on a local network when I can just use OSC?" Good question. Primarily, you may find that the client-server arrangement is the best fit for a scenario with multiple local users e.g. a laptop ensemble. With its many libraries, Node also enables extended functionality e.g launch other processes on your computer from within Max, automatically pull system information like your IP address, or post Tweets during your performance. Finally, although our findings on this are inconclusive, it seems that we have had more success using Node rather than OSC for network communcation on some institutional networks. 

ADD SOMETHING HERE ABOUT NPM


*Need to add stuff here about web sockets and using the library and npm to install the library*


Navigate to the "max-socketIO-demo-local" folder in the workshop repo.

Let's start by taking a look at the "max-socketIO-local-client" script.

Now, 

Open the "max-socketIO-local" patch.