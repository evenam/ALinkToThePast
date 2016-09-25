var GameOver = function() {};

GameOver.prototype = {
	player: null,
	bg: null,
	gameOverText: null,
	continueText: null,
	continueButton: null,

	preload: function() {
	},

	create: function() {
		this.gameOverText = game.add.text(400, 150, "Game Over",
			{font: '75px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});
		this.gameOverText.anchor.x = 0.5;
		// this.continueText = game.add.text(400, 300, "Continue: ",
		// 	{font: '35px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});
		// this.continueText.anchor.x = 0.5;

		this.continueButton = game.add.button(400,300);

	},

	update: function() {

	}

}
