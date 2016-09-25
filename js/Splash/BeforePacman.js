var BeforePacman = function() {};

BeforePacman.prototype = {
	button: null,

	create: function(){		
		this.button = this.add.button(0, 0, 'BeforePacman', this.continue, this);
	},

	continue: function() {
		game.state.start('PacmanIntro');
	}
}