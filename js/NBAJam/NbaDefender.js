var NbaDefender = function(){}

NbaDefender.prototype = {
	jumpTimer: 0,
	jumpTimerMax: 60,
	sprite: null,
	game: null,

	constructor: function(game, x, y) {
		this.jumpTimer = Math.floor(10 + 40 * Math.random());
		this.jumpTimerMax = Math.floor(30 + 90 * Math.random());
		this.sprite = game.add.sprite(x, y, 'player');
		game.physics.arcade.enable(this.sprite);
		this.game = game;
	},

	update: function() {
		if (this.jumpTimer > 0)
			this.jumpTimer --;
		if (this.jumpTimer <= 0) {
			this.jumpTimer = this.jumpTimerMax;
			
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
