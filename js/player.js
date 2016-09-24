var Player = function(){}

Player.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	keys: null,
	maxVel: 300,
	accel: 100,
	maxShotTimer: 20,
	speed: 0,
	direction: 0,
	game: null,
	spaceKey: null,

	constructor: function(game, x, y) {
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x, y, 'player');
		this.keys = game.input.keyboard.createCursorKeys();
		game.physics.arcade.enable(this.sprite);
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;
		this.game = game;
		this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},

	update: function() {
		if (!this.enabled) return;

		var dirX = 0, dirY = 0, dir = 0;
		if (this.keys.left.isDown) dirX -= 1;
		if (this.keys.right.isDown) dirX += 1;
		if (this.keys.up.isDown) dirY -= 1
		if (this.keys.down.isDown) dirY += 1;

		var newSpeed = this.speed;
		dir = Math.atan2(dirY, dirX);

		this.sprite.body.velocity.x += this.accel * Math.cos(dir);
		this.sprite.body.velocity.y += this.accel * Math.sin(dir);
		
		if (dirX === 0 && dirY === 0) 
			newSpeed = 1; 
		else {
			newSpeed = Math.sqrt(this.sprite.body.velocity.x * this.sprite.body.velocity.x + this.sprite.body.velocity.y * this.sprite.body.velocity.y);
			this.direction = dir;
		}

		this.speed = this.limitSpeed(newSpeed, 25);
		if (this.speed > this.maxVel) this.speed = this.maxVel;


		this.sprite.body.velocity.x *= this.speed / newSpeed;
		this.sprite.body.velocity.y *= this.speed / newSpeed;

		if (this.shotTimer > 0)
			this.shotTimer --;
		if (this.shotTimer < 0) 
			this.shotTimer = 0;
		if (this.shotTimer === 0 && this.spaceKey.isDown) {
			this.shoot();
		}
	},

	shoot: function() {
		if (!this.enabled) return;

		this.shotTimer = this.maxShotTimer;
		var bullet = new Bullet();
		bullet.constructor(this.game, this.sprite.body.x, this.sprite.body.y, this.direction);
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
	}
}
