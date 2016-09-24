var Bullet = function(){}

Bullet.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,

	constructor: function(game, x, y, direction) {
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x, y, 'bullet');
		this.game.physics.arcade.enable(this.sprite);
		this.sprite.body.velocity.x =  Math.cos(direction * Math.PI / 180) * 20;
		this.sprite.body.velocity.y = -Math.sin(direction * Math.PI / 180) * 20;
	},

	update: function() {
		if (!this.enabled) return;
	},

	shoot: function() {
		if (!this.enabled) return;
		//TBD
	}
}
