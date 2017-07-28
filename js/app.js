var initialCats=[
        {
            name: 'ana',
            imgSrc: 'img/1.jpg',
            clickCount: 0,
            nicknames:['don','matargashti','shahan-shah']
        },
        {
            name: 'melisa',
            imgSrc: 'img/2.jpg',
            clickCount: 0,
            nicknames:['don','matargashti','shahan-shah']
        },
        {
            name: 'anastasia',
            imgSrc: 'img/3.jpg',
            clickCount: 0,
            nicknames:['don','matargashti','shahan-shah']
        },
        {
            name: 'krystal',
            imgSrc: 'img/4.jpg',
            clickCount: 0,
            nicknames:['don','matargashti','shahan-shah']
        },
        {
            name: 'karlie',
            imgSrc: 'img/5.jpg',
            clickCount: 0,
            nicknames:['don','matargashti','shahan-shah']
        }
];

var Cat = function(data){
	this.name = ko.observable(data.name);
	this.levels = [
	{level: 'newborn', click:10},
	{level: 'infant', click:25},
	{level: 'teenager', click: 50}
	];
	this.clickCount = ko.observable(data.clickCount);
	this.imgSrc=ko.observable(data.imgSrc);
	this.nicknames = ko.observable(data.nicknames);

		this.level = ko.computed(function(){
		for(var i=0;i<this.levels.length;i++){
			if(this.clickCount()<=this.levels[i].click){
				return this.levels[i].level;
			};
		};
	},this);

};

initialCats.forEach(function(obj){
	console.log(obj.name);
});

var viewModel = function(){
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	})



	this.currentCat = ko.observable(this.catList()[0]);


	this.setCurrentCat = function(setCat){
		console.log('junjuna');
		self.currentCat(setCat);
	};

	this.incrementCounter = function(){
		this.clickCount(this.clickCount()+1);
	};
};

ko.applyBindings(new viewModel());