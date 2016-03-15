//Collection
Cart = new Mongo.Collection("cart");

//Schema
var Schema = new SimpleSchema({
	user:{
		type: String,
		label: "User"
	},
	item:{
		type: String,
		label: "Item"
	},
	quantity:{
		type: Number,
		label: "Quantity"
	},
	price:{
		type: Number,
		label: "Price"
	}
});

//Attachment
Cart.attachSchema(Schema);
