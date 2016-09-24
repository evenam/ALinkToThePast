var Player = function(){}

Player.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	keys: null,

	constructor: function(game, x, y) {
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x, y, 'player');
		this.keys = game.input.keyboard.createCursorKeys();
		game.physics.arcade.enable(this.sprite);
	},

	update: function() {
		if (!this.enabled) return;

		if (this.keys.left.isDown) this.sprite.body.velocity.x  -= 5;
		if (this.keys.right.isDown) this.sprite.body.velocity.x  += 5;
		if (this.keys.up.isDown) this.sprite.body.velocity.y -= 5;
		if (this.keys.down.isDown) this.sprite.body.velocity.y += 5;

		this.sprite.body.velocity.x = Math.min(this.sprite.body.velocity.x,  50);
		this.sprite.body.velocity.x = Math.max(this.sprite.body.velocity.x, -50);
		this.sprite.body.velocity.y = Math.min(this.sprite.body.velocity.y,  50);
		this.sprite.body.velocity.y = Math.max(this.sprite.body.velocity.y, -50);
	},

	shoot: function() {
		if (!this.enabled) return;
		//TBD
	}
}
