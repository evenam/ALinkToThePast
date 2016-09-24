var NbaJamSpecial = function() {};

NbaJamSpecial.prototype = {
	defenders: null,
	ball: null,
	player: null,

	preload: function() {
		
	},

	create: function() {
		game.add.image(0, 0, 'BasketBallCourt');
		game.add.image(760, 280, 'BasketBallHoop');

		this.player = new NbaPlayer();
		this.player.constructor(game, 100, 100);

		var defender1 = new NbaDefender();
		var defender2 = new NbaDefender();
		var defender3 = new NbaDefender();
		var defender4 = new NbaDefender();
		var defender5 = new NbaDefender();

		defender1.constructor(game, 626, 168);
		defender2.constructor(game, 548, 208);
		defender3.constructor(game, 468, 288);
		defender4.constructor(game, 548, 368);
		defender5.constructor(game, 626, 408);

		this.defenders = [
			defender1,
			defender2,
			defender3,
			defender4,
			defender5
		];

		this.ball = null;
	},

	update: function() {
		for (var i = 0; i < this.defenders.length; i++) {
			this.defenders[i].update();
		}

		this.player.update();

		if (this.ball)
			this.ball.update();
	}
}
