var Score = function() {};

Score.prototype = {
	value: 0,
	text: null,
	healthText: null,
	health: 3,
	healthArray: null,
	music: null,
	sfx: null,


	constructor: function(track) {

		this.healthText = game.add.text(33,70, 'Health:',
			{font: '23px Helvetica', fill: '#ffffff', fontVariant:'small-caps'});
		// this.health = 3;
		this.healthArray = new Array();
		this.initHealth();
		if(this.music !== null && this.music.isPlaying){
			this.music.stop();
		}
		this.music = new Phaser.Sound(game, track,1,true);
		this.music.play();

	},

	playSound: function(track){
		this.sfx = new Phaser.Sound(game, track, 1, false);
		this.sfx.play();
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
		this.text = game.add.text(33, 30, "Score: " + this.value,
			{font: '30px Helvetica', fill: '#ffffff', fontVariant:'small-caps'});
	},

	loseHealth: function() {
		if(this.health === 1){
			//Womp, Womp, Womp... Game Over!
			this.nukeHealthArray();
			gameOverScreen.show();
			return;
		}
		else {
			this.health--;
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
