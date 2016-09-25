var BeforeSteve = function() {};

BeforeSteve.prototype = {
	button: null,

	create: function(){		
		this.button = this.add.button(0, 0, 'BeforeSteve', this.continue, this);
	},

	continue: function() {
		game.state.start('SteveStage');
	}
}