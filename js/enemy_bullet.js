var EnemyBullet = function(){}

EnemyBullet.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	speed: 800,

	constructor: function(game, x, y, direction, img) {
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x,y,img);
		game.physics.arcade.enable(this.sprite);
		this.sprite.ParentRef = this;
		this.sprite.checkWorldBounds= true;
		this.sprite.body.velocity.x = Math.cos(direction) * this.speed;
		this.sprite.body.velocity.y = Math.sin(direction) * this.speed;
		this.sprite.anchor.setTo(.5, .5);
		this.sprite.angle = direction * 180 / Math.PI;
	},

	update: function() {
		if (!this.enabled) return;
	},

	destroy: function(){
		this.enabled = false;
		this.sprite.destroy(); // for testing purposes.
		score.loseHealth();
	}
}
