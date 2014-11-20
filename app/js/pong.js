var $ = require('jquery');
var GameLoop = require('./game-loop');
var Ball = require('./ball');

function Pong($els) {
	this.$els = $els;
	this.gameLoop = new GameLoop(60, this.update.bind(this));
	this.ball = new Ball($els.ball);
	this.centerCourt = {x: $els.court.width() / 2, y: $els.court.height() / 2};
}

Pong.prototype.centerBall = function () {
	this.ball.moveTo(this.centerCourt);
};

Pong.prototype.run = function () {
	this.gameLoop.start();
};

Pong.prototype.update = function () {
	var _this = this;
	console.log(_this);
	this.ball.update();
};

module.exports = Pong;