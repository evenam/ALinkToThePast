var Bullet = function(){}

Bullet.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,

	constructor: function(game, x, y, direction) {
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x, y, 'bullet');
		game.physics.arcade.enable(this.sprite);
		this.sprite.body.velocity.x = Math.cos(direction) * 1000;
		this.sprite.body.velocity.y = Math.sin(direction) * 1000;
	},

	update: function() {
		if (!this.enabled) return;
	}
}
