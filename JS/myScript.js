"use strict";

//Эта функция запускает таймер
function start() {
	window.timerId = window.setInterval(timer, 1000);
}
//Эта функция останавливает таймер
function stop() {
	window.clearInterval(window.timerId);
}

//Эта функция меняет value для инпута
function timer() {
	var elem = document.getElementById('test');
	elem.value = parseInt(elem.value)+1;
}