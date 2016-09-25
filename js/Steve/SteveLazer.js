var SteveLazer = function(){}

SteveLazer.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	//speed: 800,
	direction: 0,
	rotDir: 0,
	isLazer: true,

	constructor: function(game, x, y, direction, rotDir) {
		this.shotTimer = 0;
		this.enabled = true;
		this.sprite = game.add.sprite(x,y,'SteveLazer');
		game.physics.arcade.enable(this.sprite);
		this.sprite.anchor.setTo(.5, 0);
		this.sprite.ParentRef = this;
		this.sprite.angle = direction * 180 / Math.PI;
		this.direction = direction * 180 / Math.PI;
		this.rotDir = rotDir;
		this.shotTimer = 0;
		this.sprite.ParentRef = this;
		this.sprite.isLazer = true;

		var sound = game.add.audio('lazer_sound');
		sound.play();
	},

	update: function() {
		if (!this.enabled) return;

		this.shotTimer ++;

		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;

		this.sprite.angle += this.rotDir * .66;
		if (this.shotTimer > 45) 
			this.destroy();
	},

	destroy: function(){
		this.enabled = false;
		this.sprite.destroy(); // for testing purposes
		this.sprite = null;
		//score.loseHealth();
	}

}
