var Menu = function(){};

Menu.prototype = {
	bg: null,
	load_label: null,

	preload: function() {
		this.load_label = game.add.text(90, 90, 'Please wait, loading...', {font: '30px Arial', fill: '#ffffff' });
		this.bg = game.load.image('shadytreelogo', 'Assets/gfx/shady_tree.png');
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

		game.load.image('pacmanghost1', 'Assets/gfx/pacmanghost1.png');
		game.load.image('pacmanghost2', 'Assets/gfx/pacmanghost2.png');
		game.load.image('pacmanghost3', 'Assets/gfx/pacmanghost3.png');
		game.load.image('pacmanghost4', 'Assets/gfx/pacmanghost4.png');
		game.load.image('pacmanghost5', 'Assets/gfx/pacmanghost5.png');


		game.load.image('TetrisDrop', 'Assets/gfx/tetris_drop.png');

		game.load.image('pacground', 'Assets/gfx/pac-man_background.png');
		game.load.image('steveground', 'Assets/gfx/BSODdevelopers.png');
		game.load.image('tetrisbg', 'Assets/gfx/tetris background.png');

		game.load.spritesheet('steve', 'Assets/gfx/steve/steve_sprsheet.png', 160, 200, 7);

		game.load.spritesheet('gabe', 'Assets/gfx/gabenewell_spritesheet.png', 61, 115, 6);
		game.load.spritesheet('bbdefender', 'Assets/gfx/basketballplayer_spritesheet.png', 58, 112, 3);

		game.load.spritesheet('TEnemy1', 'Assets/gfx/tetris_bug_spritesheet.png', 61, 61, 3);
		game.load.spritesheet('TEnemy2', 'Assets/gfx/tetris_L_spritesheet.png', 50, 87, 3);
		game.load.spritesheet('TEnemy3', 'Assets/gfx/tetris_I_spritesheet.png', 42, 84, 3);
		game.load.spritesheet('TEnemy4', 'Assets/gfx/tetris_macaroni_spritesheet.png', 48, 74, 3);
		game.load.spritesheet('TEnemy5', 'Assets/gfx/tetris_square_spritesheet.png', 56, 68, 3);

		//Projectile
		game.load.image('bullet', 'Assets/gfx/projectile_pacman.png');

		game.load.image('cherry', 'Assets/gfx/cherry_pac-man.png');

		// default enemy
		game.load.image('enemy', 'Assets/gfx/monster.png');

		game.load.image('SteveLazer', 'Assets/gfx/steve/steve_lazer.png');
		game.load.image('WindowsBullet', 'Assets/gfx/steve/steve_windowsbullest.png');
		game.load.image('WhiteTetrisBullet', 'Assets/gfx/tetris_whiteprojectile.png');
		game.load.image('RedTetrisBullet', 'Assets/gfx/tetris_projectile.png');

		//Splash screens
		game.load.image('startscreen', 'Assets/gfx/startscreen.png');
		game.load.image('BeforePacman', 'Assets/gfx/Text screens/beforePac-man.png');
		game.load.image('BeforeNBA', 'Assets/gfx/Text screens/beforeNBA.png');
		game.load.image('BeforeTetris', 'Assets/gfx/Text screens/beforetetris.png');
		game.load.image('BeforeSteve', 'Assets/gfx/Text screens/beforesteve.png');


		game.load.spritesheet('explosion', 'Assets/gfx/explosion_transparent.png', 64, 64, 23);
	},

	create: function() {
		var button = this.add.button(0, 0, 'shadytreelogo', this.startGame, this);
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	startGame: function() {
		this.state.start('StartScreen');
		//this.state.start('NbaJamIntro');
		//this.state.start('NbaJamSpecial');
		//this.state.start('PacmanIntro');
		//this.state.start('SteveStage');
		//this.state.start('TetrisIntro');

	}

}
