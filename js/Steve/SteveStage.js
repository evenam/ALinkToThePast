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

		game.physics.arcade.overlap(this.steve.sprite, this.player.sprite, this.player.onHit);
		if (this.steve.bullet && (this.player.isHit === 0) && this.steve.bullet.isLazer === undefined) {
			game.physics.arcade.overlap(this.steve.bullet.sprite, this.player.sprite, this.player.onHit);
		} else if (this.steve.bullet && (this.player.isHit <= 0)) {
			var dir_lazer = 270 - this.steve.bullet.sprite.angle;
	      	var diffX = this.player.sprite.body.x - this.steve.sprite.x;
	      	var diffY = this.player.sprite.body.y - this.steve.sprite.y;
			var dir_player = 180 - (180 / Math.PI) * Math.atan2(-diffY, -diffX);
			console.log('here')
			if (Math.abs(dir_player - dir_lazer) < 5) this.player.onHit(this.steve.bullet.sprite, this.player.sprite);
		}

		score.draw();
	}

}
