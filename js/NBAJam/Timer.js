var Timer = function() {};

Timer.prototype = {

	clock: null,
	seconds: null,
	timer: null,
	newtimer:  null,

	constructor: function() {

	 this.seconds = 24;
	 timer = game.time.create(true);
	 timer.repeat(1000, 24, this.decrementSeconds, this);
	 timer.start();
	},

	decrementSeconds: function () {
			this.seconds--;
			if (this.seconds == 0){
				// Bommmmmmmp!
				timer.stop();
			}
	},

	update: function() {
		if(this.clock !== null){
			this.clock.destroy();
		}

		if(this.seconds < 10){
			this.clock = game.add.text(375,30, '0' + this.seconds.toString(),
				{font: '25px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});
		} else {
		this.clock = game.add.text(375,30, this.seconds,
			{font: '25px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 5});
		}
	}


}
