var game;

game = new Phaser.Game(800, 600, Phaser.CANVAS);

var score = new Score();

game.state.add('Menu', Menu);
//game.state.add('Game', Game);
game.state.add('TetrisIntro', TetrisIntro);

// game.state.add('TetrisMain', TetrisMain);
// game.state.add('TetrisBoss', TetrisBoss);
game.state.add('NbaJamIntro', NbaJamIntro);
// game.state.add('NbaJamMain', NbaJamMain);
// game.state.add('NbaJamBoss', NbaJamBoss);
game.state.add('PacmanIntro', PacmanIntro);
// game.state.add('PacmanMain', PacmanMain);
// game.state.add('PacmanBoss', PacmanBoss);
// game.state.add('GameOver', GameOver);
// game.state.add('ShadyTree', ShadyTree);
game.state.start('Menu');
