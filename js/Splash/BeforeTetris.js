var BeforeTetris = function() {};

BeforeTetris.prototype = {
	button: null,

	create: function(){		
		this.button = this.add.button(0, 0, 'BeforeTetris', this.continue, this);
	},

	continue: function() {
		game.state.start('TetrisIntro');
	}
}