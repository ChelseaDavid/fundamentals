/*
 *Objects, Interfaces, and API's
 */

let dog = {
	name: "Opie",
	color: "Cow",
	breed: "Shitzu-Chihuahua",
	size: "Small",
	bark: function (typeOfBark){
		console.log("Bark!");
	},
};

function x(y) {
	y.num = y.num + 5;
	console.log(y);
}
let y = {
	name: "Chelsea",
	num: 10,
}
x(y);
console.log(y);
