//Collection
Pages = new Mongo.Collection('pages');

//Schema
var Schema = new SimpleSchema({
	page:{
		label: "Page Name",
		type: String,
		max: 50
	},
	route:{
		label: "Route",
		type: String,
		unique: true,
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
	}
});

//Attachment
Pages.attachSchema(Schema);
