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

		for(var bt = 0; bt < this.player.bullets.length; bt++){
			game.physics.arcade.overlap(this.player.bullets[bt].sprite, this.steve.sprite, this.steve.onHit);
		}
		this.player.update();
		this.steve.update();
	}

}
