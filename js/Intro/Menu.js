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
		game.load.image('BasketBullet', 'Assets/gfx/basketball.png');
		game.load.image('topwall', 'Assets/gfx/800x40 black.png');
		game.load.image('sidewall', 'Assets/gfx/40x220 black.png');
		game.load.image('life', 'Assets/gfx/life.png');
		game.load.image('bball_shadow', 'Assets/gfx/NBAjam_basketballshadow2.png');
		game.load.image('door', 'Assets/gfx/door.png');

		game.load.spritesheet('steve', 'Assets/gfx/steve/steve_sprsheet.png', 160, 200, 6);

		game.load.spritesheet('gabe', 'Assets/gfx/gabenewell_spritesheet.png', 61, 115, 6);
		game.load.spritesheet('bbdefender', 'Assets/gfx/basketballplayer_spritesheet.png', 58, 112, 3);

		//Projectile
		game.load.image('bullet', 'Assets/gfx/projectile.png');

		game.load.image('cherry', 'Assets/gfx/cherry_pac-man.png');

		// default enemy
		game.load.image('enemy', 'Assets/gfx/monster.png');

		//game.load.image('SteveLazer', 'Assets/gfx/steve/lazer.png');
		game.load.image('WindowsBullet', 'Assets/gfx/steve/steve_windowsbullest.png');
	},

	create: function() {
		var button = this.add.button(0, 0, 'bg', this.startGame, this);
		button.scale.setTo(800 / 3507, 600 / 2550);
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	startGame: function() {
		this.state.start('SteveStage');
		//this.state.start('PacmanIntro');
	}

}
