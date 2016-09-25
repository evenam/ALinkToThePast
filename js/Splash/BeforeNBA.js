var BeforeNBA = function() {};

BeforeNBA.prototype = {
	button: null,

	create: function(){		
		this.button = this.add.button(0, 0, 'BeforeNBA', this.continue, this);
	},

	continue: function() {
		game.state.start('NbaJamSpecial');
	}
}