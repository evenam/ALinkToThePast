var SteveStage = function() {};

SteveStage.prototype = {
	player: null,
	steve: null,
	bg: null,

	preload: function() {
	},

	create: function() {
		game.add.image(0, 0, 'steveground');
		this.player = new Player();
		this.player.constructor(game, 100, 100);

		this.steve = new Steve();
		this.steve.constructor(this.game, this.player);
		this.player.sprite.body.collideWorldBounds = true;
		//music = new Phaser.Sound(game,'sv_track',1,true);

		//music.play();

		score.constructor("steve_music");
	},

	update: function() {

		for(var bt = 0; bt < this.player.bullets.length; bt++){
			game.physics.arcade.overlap(this.player.bullets[bt].sprite, this.steve.sprite, this.steve.onHit);
		}
		this.player.update();
		this.steve.update();

		if (!(this.explosion === undefined)) {
			this.explosion.forEach(function(e) {
					e.update();
			});

			this.explosion = this.explosion.filter(function(e) {
				return e.anim.isPlaying;
			});
		}

		if (this.steve.bullet && (this.player.isHit === 0)) {
			if (condition) {
				this.player.onHit(this.steve.bullet.sprite, this.player.sprite);
			}
		}

		score.draw();
	}

}
