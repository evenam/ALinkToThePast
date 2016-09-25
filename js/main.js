var game;

game = new Phaser.Game(800, 600, Phaser.CANVAS);

var score = new Score();

game.state.add('Menu', Menu);
game.state.add('TetrisIntro', TetrisIntro);

game.state.add('NbaJamIntro', NbaJamIntro);
game.state.add('NbaJamSpecial', NbaJamSpecial);
game.state.add('PacmanIntro', PacmanIntro);
game.state.add('SteveStage', SteveStage);
// game.state.add('GameOver', GameOver);
game.state.add('StartScreen', StartScreen);
game.state.add('BeforePacman', BeforePacman);
game.state.add('BeforeNBA', BeforeNBA);
game.state.add('BeforeTetris', BeforeTetris);
game.state.add('BeforeSteve', BeforeSteve);
game.state.start('Menu');
score.constructor();
