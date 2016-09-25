var Explosion = function(){}

Explosion.prototype = {
	game: null,
	sprite: null,
	anim: null,

	constructor: function(game, x, y, radius) {
		this.game = game;
		this.sprite = game.add.sprite(x, y, 'explosion');
		this.sprite.anchor.setTo(.5, .5);

		if (game.state.getCurrentState().explosion === undefined) game.state.getCurrentState().explosion = [];

		game.state.getCurrentState().explosion.push(this);
		this.sprite.animations.add('splode', 
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
			15, 16, 17, 18, 19, 20, 21, 22, 23], 30, false);
		this.anim = this.sprite.animations.play('splode');

		this.sprite.scale.setTo(radius, radius);
		this.sprite.angle = Math.random() * 360;
	},

	update: function() {
		if (!this.anim.isPlaying) {
			this.sprite.destroy();
		}
	}
};