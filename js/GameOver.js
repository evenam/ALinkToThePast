var GameOver = function() {};

GameOver.prototype = {
	bg: null,
	gameOverText: null,
	continueButton: null,
	quitButton: null,
	image: null,

	constructor: function() {

		// this.bg = game.add.image(0,0, 'blackBg');
		this.gameOverText = game.add.text(400, 200, "Game Over",
			{font: '50px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});
		this.gameOverText.anchor.x = 0.5;



		// this.continueText = game.add.text(400, 300, "Continue: ",
		// 	{font: '35px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});
		// this.continueText.anchor.x = 0.5;

		// this.image = game.add.image(720, 520, 'TEnemy1');
		// this.image = game.add.image(650, 520, 'TEnemy2');
		// this.image = game.add.image(580, 520, 'TEnemy3');
		// this.image = game.add.image(510, 520, 'TEnemy4');
		// this.image = game.add.image(440, 520, 'TEnemy5');


    // this.continueButton = game.add.button(400, 300, 'TEnemy1');
		// this.quitButton = game.add.button(300,300, 'TEnemy2');


	},

	show: function() {
			isGameOver = true;
			this.bg = game.add.image(0,0, 'blackBg');
			this.gameOverText = game.add.text(400, 200, "Game Over",
				{font: '50px Press Start 2P', fill: 'white', stroke: 'red', strokeThickness: 3});
				this.gameOverText.anchor.x = 0.5;

			this.continueButton = game.add.button(435, 300, 'continue', this.continue, this);
			this.continueButton.scale.setTo(0.75,0.75);

			this.quitButton = game.add.button(225, 300, 'quit', this.quit, this);
			this.quitButton.scale.setTo(0.75,0.75);

	},

	hide: function() {
		isGameOver = false;
		this.bg.destroy();
		this.gameOverText.destroy();
		this.continueButton.destroy();
		this.quitButton.destroy();
	},

	continue: function() {
		score.value = score.value / 2;
		this.hide();
		game.state.start(game.state.current)
	},

	quit: function() {
		score.value = 0;
		this.hide();
		game.state.start('Menu');
	}

}
