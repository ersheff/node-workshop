const Max = require('max-api');

// Perhaps more useful is the addHandlers function in which multiple handlers can be defined in a single JavaScript object and loaded at once.
// As an added bonus, by using addHandlers, we can look for input types.

const handlers = {
	
	// Look for incoming numbers and print them directly to the Max console.
	[Max.MESSAGE_TYPES.NUMBER]: (num) => {
		Max.post(num);
	},
	
	// Here, we look for an incoming list and prepend the message "Received list:".
	// Using the ... spread operator again.
	[Max.MESSAGE_TYPES.LIST]: (...list) => {
		Max.post("Received list: ", ...list);
	},	
  };
  
  // This line id required to call all the handlers that were defined in the object above.
  Max.addHandlers(handlers);