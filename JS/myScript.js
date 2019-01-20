"use strict";

function func() {
	let elem = document.getElementsByClassName('test');
	
	for(let i = 1; i <= elem.length; i++) {
		elem[i].innerHTML = i;
		}

	}