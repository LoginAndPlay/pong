var $ = require('jquery');
var Pong = require('./pong');

$(document).ready(function () {
	var $pong = $('#pong'),
		$court = $('#court', $pong),
		$ball = $('#ball', $pong),
		pong = new Pong({court: $court, ball: $ball});
		
	pong.centerBall();
	pong.ball.setSpeed();
	console.log(pong);

	addEventListeners();

	function addEventListeners() {
		$pong.on('click', '#start', function () {
			pong.gameLoop.start();
		});

		$pong.on('click', '#stop', function () {
			pong.gameLoop.stop();
		});

		$pong.on('click', '#step', function () {
			pong.gameLoop.step();
		});

		$pong.on('click', '#step-10', function () {
			pong.gameLoop.step(10);
		});

		$pong.on('click', '#center-ball', function () {
			pong.centerBall();
		});
	}
});