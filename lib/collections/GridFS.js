
CatImages = new FS.Collection("catImages", {
  stores: [new FS.Store.GridFS("catImages")]
});

ProImages = new FS.Collection("proImages",{
	stores: [new FS.Store.GridFS("proImages")]
});

Slider = new FS.Collection("slider",{
	stores: [new FS.Store.GridFS("slider")]
});

SimpleSchema.messages({
  regEx: [
    {msg: "[label] must be 11 numbers ."},
  ]
});
