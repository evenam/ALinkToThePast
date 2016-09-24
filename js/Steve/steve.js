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
	lazer: null,
	tell: 0,

	game: null,
	player: null,

	constructor: function(game, player) {
		this.state = 0;

		this.game = game;
		this.player = player;
	},

	update: function() {

	},

	updateNormal: function() {
		this.normal.current ++;
		if (this.normal.current >= this.normal.timer)
			this.state = this.normal.nextStage;
	},

	updateFling: function() {
		// fling windows and bail
		this.generateNormalObject();

	},

	updateLazerTell: function() {
		// play tell aniumation
		this.state = 3;
	},

	updateLazer: function() {
		this.tell = 0;
		this.state = 0;

		// fire the lazer

		this.generateNormalObject();
	},

	generateNormalObject: function() {
		this.normal = {
			nextStage: (Math.random() > .33 ? 1 : 2),
			current: 0,
			timer: 120
		}
	}
};





















