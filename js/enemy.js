var Enemy = function(){}

Enemy.prototype = {
	walkTimer: 0,
	enabled: true,
	sprite: null,
	playerRef: null,
	stateTimer: 0,
	speed: 0,

	// 0 - shooter
	// 1 - walker
	type: 0,

	// 0 - walk
	// 1 - shoot
	state: 0,

	constructor: function(game, x, y, player, type) {
		this.sprite = game.add.sprite(x, y, 'enemy');
		game.physics.arcade.enable(this.sprite);

		this.state = 0;
		this.playerRef = player;
		this.type = type;
		this.enabled = true;
		if (type === 1) 
			this.speed = 200;	 
		else 
			this.speed = 150;	
	},

	update: function() {
		if (!this.enabled) return;

		this.stateTimer ++;
		if (this.stateTimer >= 60) {
			this.stateTimer = 0;
			if (this.type === 0) {
				this.state = (this.state + 1) % 2;
			} else if (this.type === 1) {
				this.state = (this.state + 1) % 1;
			}
		}

		switch (this.state) {
			case 0: this.updateWalk(); break;
			case 1: this.updateShoot(); break;
			default: this.state = 0; break;
		}
	},

	updateWalk: function() {
		if (this.walkTimer == 0) {
			var diffY = this.playerRef.sprite.body.y - this.sprite.body.y;
			var diffX = this.playerRef.sprite.body.x - this.sprite.body.x;
	
			this.sprite.body.velocity.x = 0;
			this.sprite.body.velocity.y = 0;
			
			var speedRatio = 0.7;
			var maxRatio = 1.3;
			var speedDiff = (speedRatio + Math.random() * (maxRatio - speedRatio));
			if (Math.abs(diffX) > Math.abs(diffY)) {
				if (diffX < 0) 
					this.sprite.body.velocity.x = -this.speed * speedDiff;
				else if (diffX > 0) 
					this.sprite.body.velocity.x = this.speed * speedDiff;
			} else {
				if (diffY < 0) 
					this.sprite.body.velocity.y = -this.speed * speedDiff;
				else if (diffY > 0) 
					this.sprite.body.velocity.y = this.speed * speedDiff;
			}
	
			this.walkTimer = 30;
		} else {
			this.walkTimer --;
		}
	},

	updateShoot: function() {
		this.walkTimer = 0;
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;
		if (this.stateTimer === 0) {
			// TODO: shoot bullet
		}
	}
}
