/*

                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                         :++++++/.                                                  
                                      ./+sso+++++::-....----.`                                      
                                 ``:/+//::::::::::///////++ooo.                                     
                                -oo+:-....--::::://///////++++/:-..`                                
                              -//:-.`````..---::::://////////+++++oo/-                              
                            `/+/-.````````..----::::::////////++++++ooso`                           
                         .-:/+/--.````````..----::::::////////+++++++osso/-`                        
                       `/ss+/:--..``````....-----:::::::///////++++++oooosso:                       
                     `-oso/::---.............----:::::::///////+++++oooooosss:`                     
                    +sso+/:-----.....-------------::::::///////+++++ooooooooos+`                    
                  `:yss+/::------------------------:::::///////+++++oosssooooos+:.                  
                `-ossoo///:::::--------------------::::://////++++++oossssssssyyss+-.               
                +ssoo++////::::::------------------::::://////++++++ooosssyyyyyyyyyys               
              .+ssso+++////:::::::-----------------::::://////++++++ooosssyyyyhhhyyyy+.             
             :sssoo++++////////::::------------------::::::////+++++ooosssyyyhhhhhhhhys-            
            `ssoo+++++++/+//////::::-----------------:::::::////++++oooosssyyhhhhddhhhyy`           
           `osssoo+++++++//////:::::::------------:::::::///////++++oooosssyyhhhddddddhy+           
           -yyyssoo++++++/////::::::::----------:::::::::://////++++oooosssyyhhddddmmmdhs`          
          `oyyyyyso++++++/////::::::::::-------:::::::::::::////++++ooossssyyhhddmmmmmmhy-          
          -yyyhhhyo++++++/////:::::::::::::-----:::::::::::::///+++ooosssssyyhhdmmmmmmmhy-          
          :yyhhddysoo++++/////::::::::::::::--::::::::::://////++++ooosssssyyhhdmmmmmmmhy-          
          syhhdmmdyooo+++////////////::::::::::::::///++ooooo++oooooosssssyyyhhdmmNNmddhy-          
          yyhhdmmmysooo++////////++++/////:::::///+++osyyyyyssssssssssssssyyyyhhdddddhyyy:`         
          yyhhdmmNdsooo++//++++oooooooo+++++//+++osssyhhyysssyyyyyyyysssssssyyyyyyssyhhyys/         
          yyhhdNNNdsooo++++++oossssyyyssooo+++//+oyhhhhyyssssyhhhhyyysoossssssyyssoyyhysosy-        
          oyyhdmmNdsooooooooossyyyyyhhyyyyso+/::/osyyysoo+++syyyyyysssooooosssyysssssooo+osy.       
          :hhhyhhdhyssossyyyyyyyyyyyyyysssso+/::/ossoo++//++oosoooo++++++ooosssyhhyoo+oo/+sy        
          -yhysssyysssosssyyhhysssssssssoooo+////osooo+++++++o++++////+++ooosssyhhhso++o/oyh        
           ohysooooooooooossyysooooo+++o++ooo+//+osooo+++++++++///////++oooosssyyhyso//o+shh        
           .hyooooooooooo+ooooooooo+++++++ooo+//+ossoo+//////////////+ooooossssyyysoo/:oshdh        
           `shs+++o+ooo+++++++++++++++++++ooo+///osssoo+///////////+++oooosssssyhhyss+/oyddo        
            /hyo++++oooo+++++++++++////+++ooo//:/+sssso++//:://///+++ooooossssyyhhyso+oohmd.        
            /hyso+++ossoo+++++++++/////+++ooo/::/+ssssooo++////+++++oooooossssyyhhyo++oshdo         
            .yhhyo//+osooooooo++++//++oooosoo////+sssssssoooo+/+++++oooooosssyyyyhyo++oyddo         
             ohhhy+/+sssooooooo++++++osssssyso+++shhhyysoooooo++++++oooooossyyyyhhyso+ohh/-         
             `shhho/+osssoooooo++++ooooooosyyyyyyhhyyssooooooo++++++oooooosssyyyhhyso+oy-           
              +hhhs/+ossssooooo++++oooooooosssyyyyssoooooooooo++++++ooooossssyyyhhysooy+            
              .+yhs/+osssoooooo+++oooooooooooossssooooooooo+oo+++++++oooossssyyyhhhhyhd+            
                -hy++oossoooooo+++ooooo+++++++++++++ooooo++++++++++++oooosssssyyhdmmmmm/            
                 -yysoossoooooo+++++oo++++++++++++++++++++++++++//++++ooosssssyyhdmmdds`            
                  .shyyyysoooo++++++++++ooosssooosssssyyyssoo+++///++oooosssssyhhdddds`             
                   :hhhhyssooo+++++++++oosyhyssooooooossyysso+++///++oooossssyyhhdddd:              
                     /shhysssoo++++++++++osso+////////+ooooo++++///++ooosssyyyhhhddo:               
                       yhyyssoo+++++++++++++o++++++++ooooooo+++++++++osssssyyhhhhyo`                
                       -yhhssoooo++++++++++ooooooooooo+++++++++++++ooosssyyhhddo:`                  
                        /ddyyssoooo+++++++++++++++++//////+++++++ooossssyyhdddh-                    
                         +dddhyssoooo+++++////////////////+++++ooossssyyhddddh:                     
                          ydhsossssooooo+++/////////////+++++oosssyyyhddddddy`                      
                          /ss+oyyyssoooo+++/////////////++++oossyyyyyhddmmdds                       
                           `.:ohhhhyyyssoo++++///////+++oooosyyhhhddddmmmdhy.                       
                             `:dhhdddhyssoooo+++++++++ooosssyhdddddmmddddhy/                        
                               oyyyhdddhyyssoooooooooosssyyyhdmmmmmmmdhhhs+`                        
                                 `-/yhdddddyyyssssyyyyhhhddddmmmmmddhhys/`                          
                                    .:oyhhmmdddhhhhhddddddddddmmmmdh+:.                             
                                       `.+sddmNmmmdddddddmmmmmmmdo.                                 
                                          ./sdmNNmmmmmmmmmmmmmms.                                   
                                             `:///////////////:                                     
                                                                                                    
								DEVELOPERS, DEVELOPERS, DEVELOPERS, DEVELOPERS!
                                                                                                   */



var Steve = function(){};

Steve.prototype = {

	// 0 - normal
	// 1 - fling windows
	// 2 - charge lazer
	// 3 - fire lazer

	state: 0,
	normal: null,
	tell: 0,

	game: null,
	player: null,
  bullet: null,
  lazer: null,
  direction: 1,
  openMouthAnim: null,
  health: 20,

	constructor: function(game, player) {
		this.state = 0;

		this.game = game;
		this.player = player;

    this.sprite = game.add.sprite(400, 120, 'steve');
    game.physics.arcade.enable(this.sprite);
    this.sprite.ParentRef = this;
    this.sprite.body.setSize(80, 160, 40, 20);
    this.sprite.anchor.setTo(.5, .5);
    this.generateNormalObject();
    this.lazer = false;

    this.sprite.animations.add('idle', [0], 4, true);
    this.sprite.animations.add('openMouth', [1, 2, 3], 8, false);
    this.sprite.animations.add('closeMouth', [2, 1, 0], 8, false);
    this.sprite.animations.add('tell', [4, 5, 4], 5, false);
    this.sprite.animations.add('zap', [5, 4, 5, 4], 10, true);
    this.sprite.animations.add('hurt', [4, 6, 4, 6, 0], 8, false);

    this.health = 20;
	},

	update: function() {

    if (this.bullet) this.bullet.update();
         if (this.state == 0) this.updateNormal();
    else if (this.state == 1) this.updateFling();
    else if (this.state == 2) this.updateLazerTell();
    else if (this.state == 3) this.updateLazer();

    console.log(this.state);

	},

	updateNormal: function() {
		this.normal.current ++;
    if (this.sprite.body.x > 680) this.direction *= -1;
    if (this.sprite.body.x < 040) this.direction *= -1;
    this.sprite.body.velocity.x = 100 * this.direction;
		if (this.normal.current >= this.normal.timer)
			this.state = this.normal.nextStage;
    this.lazer = false;
	},

	updateFling: function() {
    if (this.sprite.body.x > 680) this.direction *= -1;
    if (this.sprite.body.x < 040) this.direction *= -1;
    this.sprite.body.velocity.x = 100 * this.direction;

    if (this.bullet === null && (this.openMouthAnim === null)) {
      this.openMouthAnim = this.sprite.animations.play('openMouth');
      var sound = game.add.audio('shout_sound');
      sound.play();
	  } else if(this.bullet === null && !this.openMouthAnim.isPlaying){
      var player = game.state.getCurrentState().player;
      var diffX = player.sprite.body.x - this.sprite.x;
      var diffY = player.sprite.body.y - this.sprite.y;
      var dir = Math.atan2(diffY, diffX);
      this.bullet = new EnemyBullet();
      this.bullet.constructor(this.game, this.sprite.body.x + 40, this.sprite.body.y + 130, dir, 'WindowsBullet');
      this.sprite.animations.play('closeMouth');
      this.openMouthAnim = null;
      this.generateNormalObject();
      this.state = 0;

      this.bullet.sprite.events.onOutOfBounds.addOnce(function(){
        this.bullet = null;
      }, this)
    }
  },

	updateLazerTell: function() {
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

		// play tell aniumation
    if(this.openMouthAnim === null ){
      var player = game.state.getCurrentState().player;
      var diffX = player.sprite.body.x - this.sprite.x;
      var diffY = player.sprite.body.y - this.sprite.y;
      var dir = Math.atan2(-diffY, diffX);
      console.log(dir * 180 / Math.PI);
      this.tell = dir;
      this.openMouthAnim = this.sprite.animations.play('tell');
      var sound = game.add.audio('tell_sound');
      sound.play();
    } else if(this.openMouthAnim !== null && !this.openMouthAnim.isPlaying){
      this.state = 3;
    }

	},

	updateLazer: function() {

    // fire the lazer
    if ((this.bullet === null || this.bullet.sprite === null) && this.lazer === true) {
      this.generateNormalObject();
      this.bullet = null;
      this.state = 0;
      this.lazer = false;
    } else if (this.bullet === null && this.lazer === false ) {
  		/*this.tell = 0;
  		this.state = 0;*/
      var player = game.state.getCurrentState().player;
      var diffX = player.sprite.body.x - this.sprite.x;
      var diffY = player.sprite.body.y - this.sprite.y;
      var dir = Math.atan2(-diffY, diffX);
      var rotDir = Math.abs(dir - this.tell) / (dir - this.tell);
      this.bullet = new SteveLazer();
      this.bullet.constructor(this.game, this.sprite.body.x + 40, this.sprite.body.y + 130, 3 * Math.PI / 2 - this.tell , -rotDir);
      this.sprite.animations.play('zap');
      this.openMouthAnim = null;
      this.lazer = true;
    }
	},

	generateNormalObject: function() {
		this.normal = {
			nextStage: 2, //(Math.random() > .33 ? 1 : 2),
			current: 0,
			timer: 120
		}
    this.sprite.animations.play('idle')
	},

  onHit: function(bullet, me){
    me.animations.play('hurt');
    //deduct his health
    var steve = me.ParentRef;
    var b = bullet.ParentRef;    
    b.destroy();
    console.log(steve.health);
    steve.health --;
    if (steve.health <= 0)
      game.state.start('FinalStage');
    
  }
};
