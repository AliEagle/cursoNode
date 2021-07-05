async function hola(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Hola ' + nombre);
			resolve(nombre);
		}, 1000);
	});
}

async function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Bla bla bla bla');
			resolve(nombre);
		}, 1000);
	});
}

async function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Adios ' + nombre);
			resolve();
		}, 1000);
	});
}
async function main() {
	let nombre = await hola('Ali');
	await hablar();
	await hablar();
	await hablar();
	await hablar();
	await adios(nombre);
	console.log('Terminamos el proceso');
}

console.log('Empezamos el proceso');
main();
console.log('Esto igual se ejecuta al inicio ya que main() es async');
