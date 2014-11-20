var randPositiveInt = require('./randPositiveInt.js');

function Ball($ball) {
	this.$el = $ball;
}

Ball.prototype.update = function () {
	this.position.x += this.speed.x;
	this.position.y += this.speed.y;
	this.$el.css({'left': this.position.x, 'top': this.position.y}); 
};

Ball.prototype.moveTo = function (position) {
	this.position = {x: position.x, y: position.y};
	this.$el.css({top: position.y, left: position.x});
};

Ball.prototype.setSpeed = function (vector) {
	this.speed = vector || {x: randPositiveInt(10), y: randPositiveInt(10)};	
};

module.exports = Ball;