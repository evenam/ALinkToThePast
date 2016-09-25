var TetrisBaddy = function(){}

TetrisBaddy.prototype = {
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
		var ranNum = Math.floor(Math.random() * 5 + 1);
		var sprite = "TEnemy" + ranNum;
		this.sprite = game.add.sprite(x, y, sprite);

		this.sprite.animations.add('walk', [1,2], 8, true);
		this.sprite.animations.add('idle', [0], 8, false);

		game.physics.arcade.enable(this.sprite);

		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.ParentRef = this;

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


			if(diffX !== 0){
				var dirX = diffX / Math.abs(diffX); 
				this.sprite.scale.setTo(-1*dirX, 1);
			}


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

			this.sprite.animations.play('walk');
	
			this.walkTimer = 30;
		} else {
			this.walkTimer --;
		}
	},

	updateShoot: function() {
		this.sprite.animations.play('idle');
		this.walkTimer = 0;
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;
		if (this.stateTimer === 0) {
			// TODO: shoot bullet
		}
	},

	onHit: function(bullet, enemy) {
		var b = bullet.ParentRef;
		var e = enemy.ParentRef;

		b.destroy();
		e.enabled = false;
		e.sprite.exists = false;
		var ch = new Collectable();
		ch.constructor(e.sprite.x, e.sprite.y, 10, 'cherry');
		game.state.getCurrentState().cherries.push(ch);
	}
}
