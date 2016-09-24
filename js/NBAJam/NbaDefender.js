var NbaDefender = function(){}

NbaDefender.prototype = {
	jumpTimer = 0;
	jumpTimerMax = 60;

	constructor: function(game, x, y) {
		this.jumpTimer = Math.floor(10 + 40 * Math.random());
		this.jumpTimerMax = Math.floor(30 + 90 * Math.random());
	},

	update: function() {
		if (this.jumpTimer > 0)
			this.jumpTimer --;
		if (this.jumpTimer <= 0) {
			this.jumpTimer = this.jumpTimerMax;
			//TODO: JUMP!
		}
	}

}
