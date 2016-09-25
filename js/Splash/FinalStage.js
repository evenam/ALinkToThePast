var FinalStage = function() {};

FinalStage.prototype = {
	button: null,

	create: function(){		
		this.button = this.add.button(0, 0, 'FinalStage', this.continue, this);
	},

	continue: function() {
		//game.state.start('SteveStage');
		//Draw some stuff
	}
}