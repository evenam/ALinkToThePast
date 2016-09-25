var Score = function() {};

Score.prototype = {
	value: 0,
	text: null,
	healthText: null,
	health: null,
	healthArray: null,


	constructor: function() {
		this.healthText = game.add.text(30,70, "Health:",
			{font: '23px Helvetica', fill: '#ffffff', fontVariant:'small-caps'});
		this.health = 3;
		this.healthArray = new Array();
		this.initHealth();
	},

	initHealth: function() {
		var x = 30;
		for(var i = 0; i < this.health; i++){
			var offset = x * i;
			this.healthArray.push(game.add.image(110 + offset, 73,'life'));
		}
	},

	draw: function(){
		if(this.text !== null)
			this.text.destroy();
		this.text = game.add.text(30, 30, "Score: " + this.value,
			{font: '30px Helvetica', fill: '#ffffff', fontVariant:'small-caps'});
	},

	loseHealth: function() {
		this.health--;
		if(this.health === 1){
			//Womp, Womp, Womp... Game Over!
			this.nukeHealthArray();
			return;
		}
		console.log(this.health);
		var elemToDestroy = this.healthArray.pop();
		elemToDestroy.destroy();
	},

	addHealth: function() {
		if(this.health === 3){
			return;
		}
		this.health++;
		this.nukeHealthArray();
		this.initHealth();

	},

	nukeHealthArray: function() {
		var len = this.healthArray.length;
		for(var i = 0; i < len - 1; i++){
			var elemToDestroy = this.healthArray.pop();
			elemToDestroy.destroy();
		}
	}



}
