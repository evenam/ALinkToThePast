var Menu = function(){};

Menu.prototype = {
	bg: null,
	load_label: null,

	preload: function() {
		this.load_label = game.add.text(90, 90, 'Please wait, loading...', {font: '30px Arial', fill: '#ffffff' });
		this.bg = game.load.image('bg', 'Assets/gfx/shady_tree.png');
		game.load.image('player', 'Assets/gfx/friendly.png');
		game.load.image('PacmanIntroBg', 'Assets/gfx/background_pac-man.png');
		game.load.image('BasketBallHoop', 'Assets/gfx/basketball_hoop.png');
		game.load.image('BasketBallCourt', 'Assets/gfx/basketball_court.png');
		game.load.image('BasketBullet', 'Assets/gfx/NBAJam_playerbullet.png')

		//Projectile
		game.load.image('bullet', 'Assets/gfx/projectile.png');

		game.load.image('cherry', 'Assets/gfx/cherry_pac-man.png');

		// default enemy
		game.load.image('enemy', 'Assets/gfx/monster.png');
	},

	create: function() {
		var button = this.add.button(0, 0, 'bg', this.startGame, this);
		button.scale.setTo(800 / 3507, 600 / 2550);
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	startGame: function() {
		this.state.start('NbaJamIntro');
		// this.state.start('PacmanIntro');
	}

}
