var Player = function(){}

Player.prototype = {
	hspeed: 0,
	vspeed: 0,
	shotTimer: 0,
	enabled: true,
	sprite: null,
	keys: null,

	constructor: function(game, x, y) {
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x, y, 'player');
		this.keys = this.game.input.keyboard.createCursorKeys();
		this.game.physics.arcade.enable(this.sprite);
	},

	update: function() {
		if (!this.enabled) return;

		if (this.keys.left.isDown) this.body.velocity.x  -= 5;
		if (this.keys.right.isDown) this.body.velocity.x  += 5;
		if (this.keys.up.isDown) this.body.velocity.y -= 5;
		if (this.keys.down.isDown) this.body.velocity.y += 5;

		this.body.velocity.x = Math.min(his.body.velocity.x,  50);
		this.body.velocity.x = Math.max(his.body.velocity.x, -50);
		this.body.velocity.y = Math.min(his.body.velocity.y,  50);
		this.body.velocity.y = Math.max(his.body.velocity.y, -50);
	},

	shoot: function() {
		if (!this.enabled) return;
		//TBD
	}
}
