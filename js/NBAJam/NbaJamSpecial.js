var NbaJamSpecial = function() {};

NbaJamSpecial.prototype = {
	defenders: null,
	ball: null,
	player: null,
	walls: null,

	preload: function() {
		
	},

	create: function() {

		this.walls = game.add.group();
		this.walls.enableBody = true;	

		var w1 = this.walls.create(0, 0, 'topwall');
		w1.body.immovable = true;
		game.physics.arcade.enable(w1);
		var w2 = this.walls.create(0, 600-40, 'topwall');
		w2.body.immovable = true;

		for(var i = 0; i < 2; i++){
			var w3 = this.walls.create(i*(800-40), 40, 'sidewall');
			w3.body.immovable = true;
			if(i != 1){
				var w5 = this.walls.create(i*(800-40), 80+220, 'sidewall');
				w5.body.immovable = true;
			}
			var w4 = this.walls.create(i*(800-40), 600 - 40 - 220, 'sidewall');
			w4.body.immovable = true;
		}

		game.add.image(0, 0, 'BasketBallCourt');
		game.add.image(760, 280, 'BasketBallHoop');
		this.player = new NbaPlayer();
		this.player.constructor(game, 60, 260);

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
		game.physics.arcade.collide(this.player.sprite, this.walls);
		this.player.update();
		for (var i = 0; i < this.defenders.length; i++) {
			this.defenders[i].update();
			this.defenders[i].sprite.bringToTop();
		}

		this.player.sprite.bringToTop();

		if (this.ball){
			this.ball.sprite.bringToTop();
			this.ball.update();
		}
	}
}
