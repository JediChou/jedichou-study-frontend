function pti(num) {
	return parseInt(num.match(/[0-9]*/g)[0]);
}
console.log(pti("12"));
console.log(pti("12px"));
console.log(pti("0x12"));
