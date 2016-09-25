var Collectable = function() {};

Collectable.prototype = {
	value: 10,
	img: 'cherry',
	sprite: null,
	enabled: true,
	x: 0,
	y: 0,

	constructor: function(x, y, value, img){
		this.x = x;
		this.y = y;
		this.value = value;
		this.img = img;
		this.sprite = game.add.sprite(this.x, this.y, this.img);
		this.enabled = true;
		game.physics.arcade.enable(this.sprite);

		this.sprite.CollectableRef = this;
	},

	enable: function() {
		this.enabled = true;
		this.sprite.exists = true;
	},

	disable: function() {
		this.enabled = false;
		this.sprite.exists = false;
	}, 

	collect: function(me, player) {
		//me is a reference to the sprite
		var ch = me.CollectableRef;
		if(ch.enabled){
			score.playSound('pickup');
			ch.disable();
			score.value += ch.value;
		}
	}

}