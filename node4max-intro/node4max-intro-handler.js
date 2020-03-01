// This first line is required at the top of your script to make the Node API available to Max.
const maxAPI = require('max-api');


// The addHandler function looks for a specific incoming message and pairs a function with it.
// For example, here it a very basic use of the function that will send the message 'ow!' out of the node.script outlet when a bang is received at its input. 
maxAPI.addHandler("bang", () => {
	maxAPI.outlet("ow!");
});


// Other responses include outputting a bang, posting directly to the Max console, or posting to the node.script debug tool console. 
maxAPI.addHandler("BangExample", () => {
	maxAPI.outletBang();
});


// Here, the "data" variable is used to pass any content following the "MaxConsole" flag through to the following function. Kind of like how we normally use the Max route object.
maxAPI.addHandler("MaxConsole", (data) => {
	maxAPI.post(data);
});


// Flags can be used on the output as well with the route object.
maxAPI.addHandler("RouteExample", (data) => {
	maxAPI.outlet("RouteExample", data);
});


// Like the previous example, the "msg" variable passes content following the "NodeConsole" flag, but in this case the ... operator is used when we don't want to specify the exact size of the incoming data (e.g. for lists).
maxAPI.addHandler("NodeConsole", (...msg) => {
	console.log(...msg);
});