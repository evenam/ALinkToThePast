var NbaBall = function(){}

NbaBall.prototype = {

	destX: 0,
	destY: 0,
	initX: 0,
	initY: 0,
	pathLength: 0,
	pathIndex: 0,
	pathSpeed: 0,
	sprite: null,
	ballSprite: null,
	game: null,

	constructor: function(game, x, y, destX, destY) {
		this.destX = destX;
		this.destY = destY;
		this.initX = x;
		this.initY = y;

		this.pathLength = Math.sqrt((x - destX) * (x - destX) + (y - destY) * (y - destY));
		this.pathIndex = 0;
		this.pathSpeed = (this.destX - this.initX) / 180;

		this.sprite = game.add.sprite(x, y, 'BasketBullet');
		this.sprite.scale.setTo(0.6, 0.6);
		game.physics.arcade.enable(this.sprite);

		this.ballSprite = game.add.sprite(x, y, 'bball_shadow');
		game.physics.arcade.enable(this.ballSprite);

		this.game = game;
	},

	update: function() {
		this.pathIndex += 1.0 / 90.0;

		var averageX = (this.destX + this.initX) / 2;
		var averageY = (this.destY + this.initY) / 2;

		var p0 = { x: this.initX, y: this.initY };
		var p1 = { x: averageX, y: averageY - 200 };
		var p2 = { x: this.destX, y: this.destY };

		var pt = this.bezier(p0, p1, p2, this.pathIndex);
		this.sprite.body.x = pt.x;
		this.sprite.body.y = pt.y;

		var slope = (this.initY+75 - this.destY) / (this.initX - this.destX);
		var lineX = pt.x;
		var lineY = slope * (pt.x - this.initX) + this.initY + 115;

		this.ballSprite.body.x = lineX + 4;
		this.ballSprite.body.y = lineY;

		this.height = this.ballSprite.body.y - this.sprite.body.y;

		if (this.pathIndex > 1) {

			var splosion = new Explosion();
			splosion.constructor(this.game, this.ballSprite.body.x, this.ballSprite.body.y - 24, .5);
		
			this.removeBall();
			if (this.initX < 400)
				this.game.state.getCurrentState().score ++;
				this.game.state.getCurrentState().score ++;

			}
	},

	bezier: function(p0, p1, p2, t) {
		var tp = 1 - t;
		var newX = tp * tp * p0.x + 2 * t * tp * p1.x + t * t * p2.x;
		var newY = tp * tp * p0.y + 2 * t * tp * p1.y + t * t * p2.y;
		return { x:  newX, y: newY };
	},

	removeBall: function() {
		this.ballSprite.destroy();
		this.sprite.destroy();
		this.game.state.getCurrentState().ball = null;
	}

}
