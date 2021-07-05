function soyAsincrona(miCallback) {
	// Tercero er ensta función la cual recibe un callback
	setTimeout(function () {
		// Se ejectua el timeout de 1seg
		console.log('Estoy siendo asíncrona'); // Se imprime esta linea
		miCallback(); // Se invoca miCallback recibido y se imprime su console log
	}, 1000);
}

console.log('Iniciando proceso...'); // Primero se imprime esta linea
soyAsincrona(function () {
	//Segundo invoca esta función que recibe otra función como parametro (callback)
	console.log('Terminando proceso...'); // Finalmente se imprime esta linea después de ser invocacda en la función asincrona
});
