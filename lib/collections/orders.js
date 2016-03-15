//Collection
Orders = new Mongo.Collection("orders");

//Schema
var Schema = new SimpleSchema({
	user:{
		type: String,
		label: "User"
	},
	items:{
		type: [Object],
		label: "items",
		blackbox: true
	},
	name:{
		type: String,
		label: "Name"
	},
	address:{
		type: String,
		label: "Address"
	},
	phone:{
		type: String,
		label: "Phone",
		regEx: /^[0-9]{11}$/
	},
	date:{
		type: Date,
		label: "Date"
	}
});

//Attachment
Orders.attachSchema(Schema);
