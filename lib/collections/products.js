//Collection
Products = new Mongo.Collection('products');

//Schema
var Schema = new SimpleSchema({
	name:{
		label: "Product Name",
		type: String,
		max: 50,
		index: 1
	},
	order:{
		label: "Order",
		type: Number,
		min: 0,
		optional: true
	},
	price:{
		label: "Price",
		type: Number,
		min: 1,
		optional: true
	},
	description:{
		label: "Description",
		type: String,
		min: 1
	},
	category:{
		label: "Category",
		type: String
	},
	image:{
		label: "Image",
		type: String,
		optional: true
	},
	specifics:{
		label: "Specifications",
		type: [Object],
		blackbox: true,
		optional: true
	},
	createdAt:{
		label: "Data",
		type: Date,
		optional: true
	}
});

//Attachment
Products.attachSchema(Schema);
