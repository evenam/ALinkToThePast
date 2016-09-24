var SteveLazer = function(){}

SteveLazer.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	speed: 800,

	constructor: function(game, x, y, direction) {
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x,y,'SteveLazer');
		game.physics.arcade.enable(this.sprite);
		this.sprite.anchor.setTo(.5, 0);
		this.sprite.ParentRef = this;
		this.sprite.angle = direction;
	},

	update: function() {
		if (!this.enabled) return;
	},

	destroy: function(){
		this.enabled = false;
		this.sprite.destroy(); // for testing purposes.
		//score.loseHealth();
	}

}
