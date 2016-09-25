var Bullet = function(){}

Bullet.prototype = {
	shotTimer: 0,
	enabled: true,
	sprite: null,
	speed: 800,
	game: null,

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
		this.game = game;
	},

	update: function() {
		if (!this.enabled) return;
	},

	destroy: function(){
		var splosion = new Explosion();
		splosion.constructor(this.game, this.sprite.body.x, this.sprite.body.y, 1);
		this.enabled = false;
		this.sprite.destroy(); // for testing purposes.
	},

	bulletSelection: function(x,y) {
		if (game.state.current === 'NbaJamIntro'){
			this.sprite = game.add.sprite(x, y, 'BasketBullet');
			this.sprite.scale.set(0.75, 0.75);
			return;
		} else if(game.state.current === 'TetrisIntro'){
			this.sprite = game.add.sprite(x, y, 'WhiteTetrisBullet');
			return;
		} else if(game.state.current === 'SteveStage'){
			this.sprite = game.add.sprite(x, y, 'sale_bullet');
			return;
		}
		this.sprite = game.add.sprite(x,y,'bullet');
	}

}
