//Collection
Sections = new Mongo.Collection('sections');

//Schema
var Schema = new SimpleSchema({
	name:{
		type: String,
		label: "name",
		optional: true
	},
	title:{
		type: String,
		label: "Title"
	},
	description:{
		type: String,
		label: "Description"
	}
});

//Attachment
Sections.attachSchema(Schema);
