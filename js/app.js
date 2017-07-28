var viewModel = function(){
	this.name = ko.observable('tabby');
	this.levels = [
	{level: 'newborn', click:10},
	{level: 'infant', click:25},
	{level: 'teenager', click: 50}
	];


	this.clickCount = ko.observable(0);
	this.imgSrc=ko.observable('img/1.jpg');

	this.incrementCounter = function(){
		this.clickCount(this.clickCount()+1);
	};

		this.level = ko.computed(function(){
		for(var i=0;i<this.levels.length;i++){
			if(this.clickCount()<=this.levels[i].click){
				return this.levels[i].level;
			};
		};
	},this);

}

ko.applyBindings(new viewModel());