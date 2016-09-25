var NbaDefender = function(){}

NbaDefender.prototype = {

	isJumping: false,
	moveDir: 1,
	jumpTimer: 0,
	jumpTimerMax: 60,
	speed: 100,
	sprite: null,
	game: null,
	jumpAnim: null,


	constructor: function(game, x, y) {
		this.jumpTimer = Math.floor(10 + 40 * Math.random());
		this.jumpTimerMax = Math.floor(30 + 90 * Math.random());
		this.sprite = game.add.sprite(x, y, 'bbdefender');
		game.physics.arcade.enable(this.sprite);
		this.sprite.anchor.setTo(0.5, 0.5);
		//this.sprite.scale.setTo(-1.2, 1.4);
		this.sprite.scale.setTo(-1, 1);
    	this.sprite.body.setSize(60, 20, 0, 95);
    	this.speed = 100 + Math.random() * 100;

		this.sprite.animations.add('idle', [0, 1], 4, true);
		this.sprite.animations.add('jump', [2], 4, false);
		this.game = game;
		this.sprite.animations.play('idle');

		this.moveDir = (Math.random() < .5 ? 1 : -1);
		this.sprite.body.velocity.y = this.moveDir * this.speed;
		this.sprite.body.bounce.set(1);
		this.sprite.body.collideWorldBounds = true;
    	//this.sprite.body.setSize(80, 160, 40, 20);
	},

	update: function() {

		if (this.isJumping) {
			this.updateJump();
			return;
		}

		this.moveDir = Math.abs(this.sprite.body.velocity.y) / this.sprite.body.velocity.y;
		this.sprite.body.velocity.y = this.speed * this.moveDir;

		if (this.game.state.getCurrentState().ball && Math.sqrt((this.sprite.body.x - this.game.state.getCurrentState().ball.ballSprite.body.x)
			 * (this.sprite.body.x - this.game.state.getCurrentState().ball.ballSprite.body.x)
			 + (this.sprite.body.y - this.game.state.getCurrentState().ball.ballSprite.body.y)
			 * (this.sprite.body.y - this.game.state.getCurrentState().ball.ballSprite.body.y)) < 50) {
			this.isJumping = true;
		}
/*
		if (this.jumpTimer > 0)
			this.jumpTimer --;
		if (this.jumpTimer <= 0) {
			this.jumpTimer = this.jumpTimerMax;
			this.jumpAnim = this.sprite.animations.play('jump');	
		}

		if(this.jumpAnim === null || !this.jumpAnim.isPlaying){
			this.sprite.animations.play('idle');
		}*/
		this.sprite.animations.play('idle');

		if (this.game.state.getCurrentState().ball !== null) {
			var ball = this.game.state.getCurrentState().ball;
			game.physics.arcade.overlap(ball.ballSprite, this.sprite, (function(ball, me){
				return function() {
					if (ball.height < 200 && me.jumpAnim !== null)
						ball.removeBall();
				}
			})(ball, this));
		}
	},

	updateJump: function() {
		this.sprite.body.velocity.y = 0;
		if (this.jumpAnim === null) 
			this.jumpAnim = this.sprite.animations.play('jump');

		if (!this.jumpAnim.isPlaying) {
			this.jumpAnim = null;
			this.isJumping = false;
			this.sprite.body.velocity.y = this.speed * this.moveDir;
			return;
		}
	}

}
