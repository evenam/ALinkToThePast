var NbaJamIntro = function() {};

NbaJamIntro.prototype = {
	player: null,
	bg: null,
	timer: null,

	preload: function() {
	},

	create: function() {
		game.add.image(0, 0, 'BasketBallCourt');
		game.add.image(760, 280, 'BasketBallHoop');
		this.player = new Player();
		this.player.constructor(game, 100, 100);
		score.constructor();
		this.timer = new Timer();
		this.timer.constructor();
	},

	update: function() {
		this.player.update();
		score.draw();
		this.timer.update();
	}

}
