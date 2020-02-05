// This first function is required at the top of your script to make the Node API available to Max
const Max = require('max-api');

// The addHandler function looks for a specific incoming message and pairs a function with it.
// For example, here it a very basic use of the function that will send the message 'ow!' out of the node.script object outlet when a bang is received at its input. 
Max.addHandler("bang", () => {
	Max.outlet("ow!");
});