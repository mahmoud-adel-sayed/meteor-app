//Collection
Categories = new Mongo.Collection('categories');

//Schema
var Schema = new SimpleSchema({
	name:{
		label: "Category Name",
		type: String,
		max: 50
	},
	order:{
		label: "Order",
		type: Number,
		min: 0,
		optional: true
	},
	description:{
		label: "Description",
		type: String,
		min: 1
	},
	image:{
		label: "Image",
		type: String,
		optional: true
	}
});

//Attachment
Categories.attachSchema(Schema);
