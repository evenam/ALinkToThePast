var Score = function() {};

Score.prototype = {
	value: 0,
	text: null,
	healthText: null,
	lives: null,
	life1: null,
	life2: null,
	life3: null,


	constructor() {
		this.healthText = game.add.text(30,70, 'Health:',
			{font: '23px Helvetica', fill: '#ffffff', fontVariant:'small-caps'});
		this.lives = 3;
		this.life1 = game.add.image(110,73, 'life');
		this.life2 = game.add.image(140,73, 'life');
		this.life3 = game.add.image(170,73, 'life');
	},

	draw: function(x, y){
		if(this.text !== null)
			this.text.destroy();
		this.text = game.add.text(x, y, "Score: " + this.value,
			{font: '30px Helvetica', fill: '#ffffff', fontVariant:'small-caps'});
	}

}
