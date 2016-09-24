var SteveStage = function() {};

SteveStage.prototype = {
	player: null,
	steve: null,
	bg: null,

	preload: function() {
	},

	create: function() {
		this.player = new Player();
		this.player.constructor(game, 100, 100);

		this.steve = new Steve();
		this.steve.constructor(this.game, this.player);
	},

	update: function() {
		this.player.update();
		this.steve.update();
	}

}
