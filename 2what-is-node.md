## What is Node?

Node.js (Node) is ["an asynchronous event-driven JavaScript runtime... designed to build scalable network applications..."](https://nodejs.org/en/about/)

Basically, it's a way to use JavaScript to make interesting projects. It is especially useful for communicating over networks and over the internet because it can handle input/output and generate HTTP requests to web servers.

Starting with Max 8, Cycling '74 included native support for Node in Max, allowing users to launch and control Node applications directly from within their patch.

[Our good buddy Sam](https://youtu.be/RR5AlDgYI2s) describes Node for Max as a swiss army knife that can be used to do increasingly obscure things e.g. create "a Max patch that automatically generates names for bespoke potpourri".

The node.script object and [Node for Max API](https://docs.cycling74.com/nodeformax/api/) provide a way for familiar Max objects and workflows to implement and interact with the core functionality of Node.js and its many supplemental libraries.

In this workshop, we will be demonstrating multiple approaches that we have found useful for creating networked performances with Max using Node, including a local client-server application, a remote client-server application, and a web interface.

Examples of networked performances built using Node (all presented on concerts at MOXsonic 2020):

Nick Hwang's server and [web interface](https://moxsonicapp.herokuapp.com) for Arena Sequencer

Anthony Marasco's [Bendit_I/O](https://www.benditio.com) circuit bending platform (used in Gravity \| Density)

Eric Sheffield and Anna Weisling's telematic duo [Hydrokardia](https://github.com/ersheff/interdependent-series/tree/master/Hydrokardia)