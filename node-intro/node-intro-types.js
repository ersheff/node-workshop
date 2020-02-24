const maxAPI = require('max-api');

// Perhaps more useful than addHandler is the addHandlers function in which multiple handlers can be defined in a single JavaScript object and loaded at once.
// As an added bonus, by using addHandlers, we can look for input types e.g. numbers, lists, etc.

const handlers = {
	
	// Look for incoming numbers and print them directly to the Max console.
	[maxAPI.MESSAGE_TYPES.NUMBER]: (num) => {
		maxAPI.outlet('Received number: ', num);
	},
	
	// Look for an incoming list and prepend the message "Received list:".
	// Using the ... spread operator again.
	[maxAPI.MESSAGE_TYPES.LIST]: (...list) => {
		console.log('Received list: ', ...list);
	},	
  };
  
  // This line id required to call all the handlers that were defined in the object above.
  maxAPI.addHandlers(handlers);