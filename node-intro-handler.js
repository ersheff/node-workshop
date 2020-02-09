// This first function is required at the top of your script to make the Node API available to Max
const Max = require('max-api');

// The addHandler function looks for a specific incoming message and pairs a function with it.
// For example, here it a very basic use of the function that will send the message 'ow!' out of the node.script outlet when a bang is received at its input. 
Max.addHandler("bang", () => {
	Max.outlet("ow!");
});


// Other responses include outputting a bang, posting directly to the Max console, or posting to the node.script debug tool console. 
Max.addHandler("BangExample", () => {
	Max.outletBang();
});

Max.addHandler("MaxConsole", (data) => {
	Max.post(data);
});

Max.addHandler('NodeConsole', (...msg) => {
	console.log(...msg);
});