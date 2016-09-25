var Explosion = function(){}

Explosion.prototype = {
	game: null,
	sprite: null,

	constructor: function(game, x, y, radius) {
		this.game = game;
		this.sprite = game.add.sprite(x, y, 'explosion');
		this.sprite.anchor.setTo(.5, .5);
	},

	update: function() {

	}
};