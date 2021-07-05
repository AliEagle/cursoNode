function hola(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Hola ' + nombre);
			resolve(nombre);
		}, 1000);
	});
}

function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Bla bla bla bla');
			resolve(nombre);
		}, 1000);
	});
}

function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Adios ' + nombre);
			//resolve();
			reject('Hay un error');
		}, 1000);
	});
}

//--------------------------------------------------
//Ejemplo sin refactorizar de Promesa
// console.log('Iniciando el proces..');
// hola('Ali').then((nomber) => {
// 	console.log('Terminado el proceso');
// });

console.log('Iniciando el proces..');
hola('Ali')
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(adios)
	.catch((error) => {
		//Cuando trabajando con promesas en node, siempre terminar con un catch
		console.log('Ha habido un error');
		console.log(error);
	});
