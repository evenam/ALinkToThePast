var NbaBall = function(){}

NbaBall.prototype = {

	destX: 0,
	destY: 0,
	initX: 0,
	initY: 0,
	pathLength: 0,
	pathIndex: 0,
	pathSpeed: 0,

	constructor: function(game, x, y, destX, destY) {
		this.destX = destX;
		this.destY = destY;
		this.initX = x;
		this.initY = y;

		this.pathLength = Math.sqrt((x - destX) * (x - destX) + (y - destY) * (y - destY));
		this.pathIndex = 0;
		this.pathSpeed = 30 / this.pathLength;
	},

	update: function() {
		this.pathIndex += this.pathSpeed;

	}

}
