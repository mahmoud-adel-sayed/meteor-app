Template.index.onCreated(function(){
	document.title = 'Home';
	Session.set('currentRoute', Router.current().route.getName());
});

Template.index.onRendered(function(){

		var controller = new ScrollMagic.Controller();
		var wipeAnimation = new TimelineMax()
			.fromTo("#section-1 h1", 0.5 , {marginTop: "-50px"},{marginTop: "20px" , ease: Linear.easeNone})
			.fromTo("#section-1 p", 0.5 , {opacity: 0},{opacity: 1 , ease: Linear.easeNone})
			.fromTo("#section-2", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
			.fromTo("#section-2 h1", 0.5 , {marginTop: "-50px"},{marginTop: "20px" , ease: Linear.easeNone})
			.fromTo("#section-2 p", 0.5 , {opacity: 0},{opacity: 1 , ease: Linear.easeNone})
			.fromTo("#section-3", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
			.fromTo("#section-3 h1", 0.5 , {marginTop: "-50px"},{marginTop: "20px" , ease: Linear.easeNone})
			.fromTo("#section-3 p", 0.5 , {opacity: 0},{opacity: 1 , ease: Linear.easeNone})
			.fromTo("#section-4", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
			.fromTo("#section-4 h1", 0.5 , {marginTop: "-50px"},{marginTop: "20px" , ease: Linear.easeNone})
			.fromTo("#section-4 p", 0.5 , {opacity: 0},{opacity: 1 , ease: Linear.easeNone});
		scene = new ScrollMagic.Scene({
			triggerElement: "#pinContainer",
			triggerHook: "onLeave",
			duration: "700%"
		})
		.setPin("#pinContainer")
		.setTween(wipeAnimation)
		.addTo(controller);

});

Template.index.onDestroyed(function(){
	scene = scene.destroy(true);
});

Template.index.helpers({
    "allSlides": function(){
    	return Slider.find();
    },
    "sections": function(){
    	return Sections.find({}, {sort:{name:1}});
    },
    "latest": function(){
    	return Products.find({}, { sort:{createdAt: -1} , limit:6 } );
    },
    "image": function(){
    	return ProImages.findOne({_id: this.image});
    }
});
