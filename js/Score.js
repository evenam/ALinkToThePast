var Score = function() {};

Score.prototype = {
	value: 0,
	text: null,

	draw: function(x, y){
		if(this.text !== null)
			this.text.destroy();
		this.text = game.add.text(x, y, "Score: " + this.value, 
			{font: '30px Helvetica', fill: '#ffffff', fontVariant:'small-caps'});
		this.text.anchor.set(0.5, 0.5);
	} 
	
}