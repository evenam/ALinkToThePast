var TetrisIntro = function() {};

TetrisIntro.prototype = {
	player: null,
	preload: function() {

	},

	create: function() {
		this.player = new Player();
		this.player.constructor(game, 100, 100);
	},

	update: function() {
		this.player.update();
	}
}