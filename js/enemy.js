var Enemy = function(){}

Enemy.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	playerRef: null,
	stateTimer: 0,
	speed: 100,

	// 0 - shooter
	// 1 - walker
	type: 0,

	// 0 - walk
	// 1 - pause
	// 2 - shoot
    // 3 - pause
	state: 0,

	constructor: function(game, x, y, player, type) {
		this.sprite = game.add.sprite(x, y, 'enemy');
		game.physics.arcade.enable(this.sprite);

		this.state = 0;
		this.playerRef = player;
		this.type = type;
		this.enabled = true;
		if (type === 1) 
			this.speed = 150;	 
		else 
			this.speed = 100;	
	},

	update: function() {
		console.log(this.state)
		if (!this.enabled) return;

		this.stateTimer ++;
		if (this.stateTimer >= 60) {
			this.stateTimer = 0;
			if (this.type === 0) {
				this.state = (this.state + 1) % 4;
			} else if (this.type === 1) {
				this.state = (this.state + 1) % 2;
			}
		}

		switch (this.state) {
			case 0: this.updateWalk(); break;
			case 1: this.updatePause(); break;
			case 2: this.updateShoot(); break;
			case 3: this.updatePause(); break;
			default: this.state = 0; break;
		}
	},

	updateWalk: function() {
		var diffY = this.playerRef.sprite.body.y - this.sprite.body.y;
		var diffX = this.playerRef.sprite.body.x - this.sprite.body.x;

		console.log(diffX);

		if (Math.abs(diffX) > Math.abs(diffY)) {
			if (diffX < 0) 
				this.sprite.body.velocity.x = -100;
			else if (diffX > 0) 
				this.sprite.body.velocity.x = 100;
		} else {
			if (diffY < 0) 
				this.sprite.body.velocity.y = -100;
			else if (diffY > 0) 
				this.sprite.body.velocity.y = 100;
		}
	},

	updatePause: function() {
		// nothing
	},

	updateShoot: function() {
		if (this.stateTimer === 0) {
			// TODO: shoot bullet
		}
	}
}
