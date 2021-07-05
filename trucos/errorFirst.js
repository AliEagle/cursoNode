function asincrona(callback) {
	setTimeout(function () {
		try {
			let a = 3 + z;
			callback(null, a);
		} catch (e) {
			callback(e);
		}
	}, 1000);
}
// !PATRÓN ERRORFIST,CALLBACK ES EL QUE TENEMOS QUE SEGUIR SIEMPRE QUE TRABAJEMOS CON FUNCIONES ASINCRONAS Y CALLBACKS
asincrona(function (err, data) {
	if (err) {
		console.error('Tenemos un error');
		console.error(err);
		return false;
		//throw err // !EL PATRÓN THROW VA A VENIR MUY BIEN PARA FUNCIONES SINCRONAS PERO NO VA A FUNCIONAR EN ASINCRONÍA
	}

	console.log('Todo ha ido bien mi data es', data);
});
