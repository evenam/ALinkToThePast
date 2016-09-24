var NbaJamIntro = function() {};

NbaJamIntro.prototype = {
	player: null,
	bg: null,


	preload: function() {
	},

	create: function() {
		game.add.image(0, 0, 'BasketBallCourt');
		game.add.image(760, 280, 'BasketBallHoop');
		this.player = new Player();
		this.player.constructor(game, 100, 100);
	},

	update: function() {
		this.player.update();
	}
};
