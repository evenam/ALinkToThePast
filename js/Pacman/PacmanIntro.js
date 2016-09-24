var PacmanIntro = function() {};

PacmanIntro.prototype = {
	player: null,
	cherries: null,
	enemies: null,

	preload: function() {

	},

	create: function() {
		this.add.image(0, 0, "PacmanIntroBg");
		this.add.text(10, 10, "PacmanIntro", {font: '30px Helvetica', fill: '#ffffff'});

		this.cherries = [];

		for(var i = 0; i < 3; i++){
			var ch = new Collectable();
			ch.constructor(30 + i*100, 30 + i*100, 10, 'cherry');
			this.cherries.push(ch);
		}

		this.player = new Player();
		this.player.constructor(game, 100, 100);

		this.enemies = [];

		for(var i = 0; i < 5; i++){
			var en = new Enemy();
			en.constructor(game, 50 + Math.floor(Math.random() * 400), 50 + Math.floor(Math.random() * 400), this.player, 1);
			this.enemies.push(en);
		}
	},

	update: function() {
		this.player.update();

		for (var i = 0; i < this.enemies.length; i++) 
			this.enemies[i].update();

		for(var i = 0; i < 3; i++){
			game.physics.arcade.overlap(this.cherries[i].sprite, this.player.sprite, this.cherries[i].collect);
		}

		for(var bt = 0; bt < this.player.bullets.length; bt++){
			for(var et = 0; et < this.enemies.length; et++){
				game.physics.arcade.overlap(this.player.bullets[bt].sprite, this.enemies[et].sprite, this.enemies[et].onHit);
			}
		}

		score.draw(400, 300);
	}
}