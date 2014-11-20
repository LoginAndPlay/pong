function GameLoop(fps, callback) {
	this.fps = fps;
	this.callback = callback;
}

GameLoop.prototype.start = function () {
	var _this = this;
	var stepDuration = 1000 / _this.fps;
	
	this.timer = setInterval(function () {
		_this.callback();
	}, stepDuration);
};

GameLoop.prototype.stop = function () {
	clearInterval(this.timer);
};

GameLoop.prototype.step = function (steps) {
	var steps = steps || 1;
	for (var i = 0; i < steps; i++) {
		this.callback();
	}
};

module.exports = GameLoop;