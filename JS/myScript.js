"use strict";
var div = document.getElementById('elem');

div.addEventListener('click', func);

function func(event) {
	var target = event.target;
	alert(target); //выведет 'p' - абзац
}
