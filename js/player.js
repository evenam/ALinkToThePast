var Player = function(){}

Player.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	keys: null,
	maxVel: 300,
	accel: 100,
	maxShotTimer: 30,
	speed: 0,
	direction: 0,
	game: null,
	spaceKey: null,
	bullets: null,
	wKey: null,
	aKey: null,
	sKey: null,
	dKey: null,
	shootAnim: null,
	isHit: 0,

	constructor: function(game, x, y) {
		this.bullets = [];
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x, y, 'gabe');
		this.keys = game.input.keyboard.createCursorKeys();
		game.physics.arcade.enable(this.sprite);
		this.sprite.ParentRef = this;
		this.sprite.body.setSize(40, 40, (61-40)/2, (116-40));
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;
		this.game = game;
		this.wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		this.aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
		this.dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

		this.sprite.animations.add('idle', [0, 1], 4, true);
		this.sprite.animations.add('right', [2, 3], 8, true);
		this.sprite.animations.add('throwup', [4], 6, false);
		this.sprite.animations.add('bball', [5], 2, false);
		this.sprite.animations.play('idle');

		this.isHit = 0;
	},

	update: function() {
		if (!this.enabled) return;

		if (this.isHit > 0) {
			this.updateHit();
			return;
		}

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

		if (this.shotTimer > 0)
			this.shotTimer --;
		if (this.shotTimer < 0) 
			this.shotTimer = 0;
		if (this.shotTimer === 0 && (this.wKey.isDown || this.aKey.isDown || this.sKey.isDown || this.dKey.isDown)) {
			this.shoot();
			this.shootAnim = this.sprite.animations.play('throwup');
		}
	},

	shoot: function() {
		if (!this.enabled) return;

		var diffX = 0, diffY = 0, dir;
		if (this.wKey.isDown) diffY -= 1;
		if (this.aKey.isDown) diffX -= 1;
		if (this.sKey.isDown) diffY += 1;
		if (this.dKey.isDown) diffX += 1;

		if (diffX === 0 && diffY === 0) return;
		dir = Math.atan2(diffY, diffX);

		this.shotTimer = this.maxShotTimer;
		var bullet = new Bullet();
		bullet.constructor(this.game, this.sprite.x, this.sprite.y, dir);
		this.bullets.push(bullet);
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

		pl.isHit = 20;

		score.loseHealth();
	}
}
