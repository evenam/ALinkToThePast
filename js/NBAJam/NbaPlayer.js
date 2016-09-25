var NbaPlayer = function(){}

NbaPlayer.prototype = {
	enabled: true,
	sprite: null,
	keys: null,
	maxVel: 300,
	accel: 100,
	speed: 0,
	direction: 0,
	game: null,
	keySpace: null,
	shoot: 0,
	x: 0,
	y: 0,
	shootAnim: null,
	isHit: 0,

	constructor: function(game, x, y) {
		this.enabled = true;
		this.sprite = game.add.sprite(x, y, 'gabe');
		this.sprite.animations.add('idle', [0, 1], 4, true);
		this.sprite.animations.add('right', [2, 3], 8, true);
		this.sprite.animations.add('throwup', [4], 6, false);
		this.sprite.animations.add('bball', [5], 2, false);
		this.sprite.animations.play('idle');
		this.keys = game.input.keyboard.createCursorKeys();

		game.physics.arcade.enable(this.sprite);
		this.sprite.body.setSize(40, 40, (61-40)/2, (116-40));

		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;
		this.game = game;
		this.shoot = 0;
		this.keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.isHit = 0;

		this.sprite.ParentRef = this;
	},

	update: function() {
		if (!this.enabled) return;

		if (this.isHit > 0) {
			this.updateHit();
			return;
		}

		if (this.shoot === 0) {

			var dirX = 0, dirY = 0, dir = 0;
			if (this.keys.left.isDown) dirX -= 1;
			if (this.keys.right.isDown) dirX += 1;
			if (this.keys.up.isDown) dirY -= 1
			if (this.keys.down.isDown) dirY += 1;

			var newSpeed = this.speed;
			dir = Math.atan2(dirY, dirX);

			this.sprite.body.velocity.x += this.accel * Math.cos(dir);
			this.sprite.body.velocity.y += this.accel * Math.sin(dir);
			
			if (dirX === 0 && dirY === 0) {
				if(this.shootAnim === null || !this.shootAnim.isPlaying){
					this.sprite.animations.play('idle');
				}
				newSpeed = 1; 
			}
			else {
				newSpeed = Math.sqrt(this.sprite.body.velocity.x * this.sprite.body.velocity.x + this.sprite.body.velocity.y * this.sprite.body.velocity.y);
				this.direction = dir;
			}
			if(this.shootAnim === null || !this.shootAnim.isPlaying){
				if(dirX !== 0){
					this.sprite.animations.play('right');
					this.sprite.scale.setTo(dirX, 1);
				}
				if(dirY !== 0){
					this.sprite.animations.play('right');			
				}
			}

			this.speed = this.limitSpeed(newSpeed, 25);
			if (this.speed > this.maxVel) this.speed = this.maxVel;


			this.sprite.body.velocity.x *= this.speed / newSpeed;
			this.sprite.body.velocity.y *= this.speed / newSpeed;


			if (this.keySpace.isDown) {
				this.shootBall();
			}
		} else {
			this.shoot --;
			if (this.shoot < 0) this.shoot = 0;

			this.sprite.body.velocity.x = 0;
			this.sprite.body.velocity.y = 0;

			// insert shooting anim;
		}
	},

	shootBall: function() {
		if (!this.enabled) return;
		if (this.game.state.getCurrentState().timer.seconds <= 0) return;

		if (this.game.state.getCurrentState().ball === null) {
			this.shootAnim = this.sprite.animations.play('bball');
			this.sprite.scale.setTo(1,1);
			var ball = new NbaBall();
			ball.constructor(this.game, this.sprite.x+20, this.sprite.y-60, 770 , 280);
			this.game.state.getCurrentState().ball = ball;
			this.shoot = 30;
		}
	},

	limitSpeed: function(val, lim) {
		if (val > lim)
			val -= lim;
		else if (val > 0)
			val = 0;
		if (val < -lim)
			val += lim;
		else if (val < 0)
			val = 0;
		return val;
	},

	updateHit: function() {
		this.speed = this.limitSpeed(this.speed, 50);
		if (this.isHit > 1) {
			this.isHit --;
			this.sprite.alpha = (1 + Math.sin(Math.PI * this.isHit / 4)) / 2;
		} else {
			this.isHit = 0;
			this.sprite.alpha = 1;
		} 
	},
	onHit: function(enemy, me){
		var pl = me.ParentRef;
		var e = enemy.ParentRef;

		var diffY = pl.sprite.body.y - e.sprite.body.y;
		var diffX = pl.sprite.body.x - e.sprite.body.x;

		var dir = Math.atan2(diffY, diffX);

		pl.sprite.body.velocity.x = 400*Math.cos(dir);
		pl.sprite.body.velocity.y = 400*Math.sin(dir);
		e.sprite.body.velocity.y = -400*Math.sin(dir);

		pl.isHit = 20;
		pl.shoot = 0;

		score.loseHealth();
	}
}
