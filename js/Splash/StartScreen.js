var StartScreen = function() {};

StartScreen.prototype = {
	button: null,

	create: function(){		
		this.button = this.add.button(0, 0, 'startscreen', this.continue, this);
	},

	continue: function() {
		game.state.start('BeforePacman');
	}
}