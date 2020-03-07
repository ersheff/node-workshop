const maxAPI = require('max-api');

// Perhaps more useful than addHandler is the addHandlers function in which multiple handlers can be defined in a single JavaScript object and loaded at once.
// As an added bonus, by using addHandlers, we can look for input data types e.g. numbers, lists, etc.

const handlers = {
	
	// Look for incoming numbers and identify them in the Max console.
	[maxAPI.MESSAGE_TYPES.NUMBER]: (num) => {
		//convert message to string so that it looks nicer when printed
		let postNum = `Received number: ${num}`;
		maxAPI.post(postNum);
	},
	
	// Look for incoming lists and identify them in the Max console.
	// Using the ... spread operator again.
	[maxAPI.MESSAGE_TYPES.LIST]: (...list) => {
		let postList = `Received list: ${list}`;
		maxAPI.post(postList);
	},	
  };
  
  // This line is required to call all the handlers that were defined in the object above.
  maxAPI.addHandlers(handlers);