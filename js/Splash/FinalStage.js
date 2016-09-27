var FinalStage = function() {};

FinalStage.prototype = {
	button: null,
	gameOverText: null,

	create: function(){		
		this.gameOverText = game.add.text(400, 200, "Winner! Highscore!",
			{font: '32px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});
		this.gameOverText.anchor.setTo(0.5, 0.5);
		this.gameOverText = game.add.text(400, 300, "Score: " + score.value,
			{font: '24px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});
		this.gameOverText.anchor.setTo(0.5, 0.5);
		score.constructor('sv_track');
	},

	continue: function() {
		//game.state.start('SteveStage');
		//Draw some stuff
	}
}