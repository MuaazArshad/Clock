'use strict';

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const phase = document.querySelector('.phase');

const update = setInterval(() => {
	const time = new Date();
	// console.log(time);

	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();

	if (h > 12) {
		h -= 12;
		phase.innerHTML = 'PM';
	} else phase.innerHTML = 'AM';

	if (h < 10) hours.innerHTML = `0${h} :`;
	else hours.innerHTML = `${h} :`;

	if (m < 10) minutes.innerHTML = `0${m} :`;
	else minutes.innerHTML = `${m} :`;

	if (s < 10) seconds.innerHTML = `0${s}`;
	else seconds.innerHTML = `${s}`;
}, 1000);
