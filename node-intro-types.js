// This first function is required at the top of your script to make the Node API available to Max
const Max = require('max-api');

// The addHandler function looks for a specific incoming message and pairs a function with it.
// For example, here it a very basic use of the function that will send the message 'ow!' out of the node.script outlet when a bang is received at its input. 
Max.addHandler("bang", () => {
	Max.outlet("ow!");
});

// There are different ways

// Perhaps more useful is the addHandlers function in which multiple handlers can be defined in a single JavaScript object and loaded at once.
// As an added bonus, by using addHandlers, we can define specific actions depeing upon the input type.
const handlers = {
	
	// Look for incoming numbers and print them directly to the Max console.
	[Max.MESSAGE_TYPES.NUMBER]: (num) => {
		Max.post(num);
	},
	
	// Here, we look for an incoming list and prepend the message "Received list:".
	// The ... prefix in JavaScript is the "spread operator" and is used when the number of elements in the incoming data is unknown (i.e. the number of items in the list).
	[Max.MESSAGE_TYPES.LIST]: (...list) => {
		Max.outlet("Received list: ", ...list);
	},	
  };
  
  Max.addHandlers(handlers);