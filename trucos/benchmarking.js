console.time('todo');
let suma = 0;
console.time('bucle');
for (var i = 0; i < 1000000000; i++) {
	suma += 1;
}
console.timeEnd('bucle');
let suma2 = 0;
console.time('bucle2');
for (var j = 0; j < 1000000000; j++) {
	suma2 += 1;
}
console.timeEnd('bucle2');

console.time('asincrona');
console.log('Empieza el proceso async');
asincrona().then(() => {
	console.timeEnd('asincrona');
});

console.timeEnd('todo');

function asincrona() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			console.log('Termina la funcion async');
			resolve();
		});
	});
}
