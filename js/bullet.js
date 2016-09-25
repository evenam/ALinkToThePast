var Bullet = function(){}

Bullet.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	speed: 800,

	constructor: function(game, x, y, direction) {
		this.shotTimer = 0;
		this.enabled = true;
		this.bulletSelection(x,y);
		game.physics.arcade.enable(this.sprite);
		this.sprite.ParentRef = this;
		this.sprite.checkWorldBounds= true;
		this.sprite.body.velocity.x = Math.cos(direction) * this.speed;
		this.sprite.body.velocity.y = Math.sin(direction) * this.speed;

		this.sprite.angle = direction * 180/Math.PI;
	},

	update: function() {
		if (!this.enabled) return;
	},

	destroy: function(){
		this.enabled = false;
		this.sprite.destroy(); // for testing purposes.
	},

	bulletSelection: function(x,y) {
		if (game.state.current === 'NbaJamIntro'){
			this.sprite = game.add.sprite(x, y, 'BasketBullet');
			this.sprite.scale.set(0.75, 0.75);
			return;
		}
		this.sprite = game.add.sprite(x,y,'bullet');
	}

}
