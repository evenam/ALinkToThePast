var NbaJamSpecial = function() {};

NbaJamSpecial.prototype = {
	defenders: null,
	ball: null,
	player: null,
	walls: null,
	timer: null,
	score: 0,
	clock: null,
	pointRange: null,
	door: null,
	goal: null,

	preload: function() {

	},

	create: function() {

		this.walls = game.add.group();
		this.walls.enableBody = true;
		this.score = 0;

		var w1 = this.walls.create(0, 0, 'topwall');
		w1.body.immovable = true;
		game.physics.arcade.enable(w1);
		var w2 = this.walls.create(0, 600-40, 'topwall');
		w2.body.immovable = true;

		for(var i = 0; i < 2; i++){
			var w3 = this.walls.create(i*(800-40), 40, 'sidewall');
			w3.body.immovable = true;
			if(i != 1){
				var w5 = this.walls.create(i*(800-40), 40+220, 'sidewall');
				w5.body.immovable = true;
			}
			var w4 = this.walls.create(i*(800-40), 600 - 40 - 220, 'sidewall');
			w4.body.immovable = true;
		}
		game.add.image(0, 0, 'BasketBallCourt');
		this.goal = game.add.image(760, 280, 'BasketBallHoop');

		this.player = new NbaPlayer();
		this.player.constructor(game, 60, 260);

		var defender1 = new NbaDefender();
		var defender2 = new NbaDefender();
		var defender3 = new NbaDefender();
		var defender4 = new NbaDefender();
		var defender5 = new NbaDefender();

		defender1.constructor(game, 200, 168);
		defender2.constructor(game, 320, 208);
		defender3.constructor(game, 440, 288);
		defender4.constructor(game, 560, 368);
		defender5.constructor(game, 680, 408);

		this.defenders = [
			defender1,
			defender2,
			defender3,
			defender4,
			defender5
		];

		this.ball = null;
		this.timer = new Timer();
		this.timer.constructor();

		this.door = game.add.sprite(800-80+14, 260, 'door');
		game.physics.arcade.enable(this.door);
		this.door.body.setSize(40,40,20-7,0);
		this.door.scale.setTo(2, 2);
		this.door.visible = false;
		this.door.body.immovable = true;

		this.clock = game.add.text(375, 540, (this.score < 10 ? '0' : '') + this.score.toString(),
			{font: '25px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});

		var px = this.player.sprite.body.x;
		this.pointRange = game.add.text(30, 540, (px > 400 ? '1 Point Range' : '2 point range'),
			{font: '25px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});

			score.constructor();

	},

	update: function() {
		if(isGameOver) {return;}
		if(this.timer.seconds <= 0){
			this.door.visible = true;
			this.goal.visible = false;
			if(this.player.sprite.body.x > 780){
				//Switch to steve
				game.state.start('SteveStage');
			}
		} else {
			game.physics.arcade.collide(this.player.sprite, this.door);
		}
		this.timer.update();
		game.physics.arcade.collide(this.player.sprite, this.walls);
		this.player.update();
		for (var i = 0; i < this.defenders.length; i++) {
			game.physics.arcade.overlap(this.defenders[i].sprite, this.player.sprite, this.player.onHit);
			this.defenders[i].update();
		}
		if (this.ball){
			this.ball.update();
		}

		if (this.timer.seconds === 0 && this.score > 3) {
			// enable door

		}

		this.clock.destroy();
		// this.clock = game.add.text(350, 520, 'PTS:\n' + (this.score < 10 ? ' 0' : ' ') + this.score.toString(),
		// 	{font: '25px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});

		this.pointRange.destroy();
		var px = this.player.sprite.body.x;
		this.pointRange = game.add.text(33, 550, (px > 400 ? '1 Point Range' : '2 Point Range'),
			{font: '20px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});



		objects = [...this.defenders.map(function(e) { return e.sprite; }), this.player.sprite];
		if (this.ball !== null) objects.push(this.ball.ballSprite);
		objects.sort(function(a, b) { return a.body.y - b.body.y; });
		objects.forEach(function(e) { return e.bringToTop(); });
		if (this.ball) this.ball.sprite.bringToTop();

		if (!(this.explosion === undefined)) {
			this.explosion.forEach(function(e) {
					e.update();
			});

			this.explosion = this.explosion.filter(function(e) {
				return e.anim.isPlaying;
			});
		}

		score.draw();

	}
}
