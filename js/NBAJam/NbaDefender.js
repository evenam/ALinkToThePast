var NbaDefender = function(){}

NbaDefender.prototype = {
	jumpTimer: 0,
	jumpTimerMax: 60,
	sprite: null,
	game: null,
	jumpAnim: null,

	constructor: function(game, x, y) {
		this.jumpTimer = Math.floor(10 + 40 * Math.random());
		this.jumpTimerMax = Math.floor(30 + 90 * Math.random());
		this.sprite = game.add.sprite(x, y, 'bbdefender');
		game.physics.arcade.enable(this.sprite);
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.scale.setTo(-1.2, 1.4);

		this.sprite.animations.add('idle', [0, 1], 4, true);
		this.sprite.animations.add('jump', [2], 4, false);
		this.game = game;
		this.sprite.animations.play('idle');
	},

	update: function() {
		if (this.jumpTimer > 0)
			this.jumpTimer --;
		if (this.jumpTimer <= 0) {
			this.jumpTimer = this.jumpTimerMax;
			this.jumpAnim = this.sprite.animations.play('jump');	
		}

		if(this.jumpAnim === null || !this.jumpAnim.isPlaying){
			this.sprite.animations.play('idle');
		}

		if (this.game.state.getCurrentState().ball !== null) {
			var ball = this.game.state.getCurrentState().ball;
			game.physics.arcade.overlap(ball.ballSprite, this.sprite, (function(ball, me){
				return function() {
					if (ball.height < 100)
						ball.removeBall();
				}
			})(ball, this));
		}
	}

}
