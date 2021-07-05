const fs = require('fs');

function leer(ruta, cb) {
	fs.readFile(ruta, (error, data) => {
		cb(data.toString());
	});
}

function escribir(ruta, contenido, cb) {
	fs.writeFile(ruta, contenido, function (error) {
		if (error) {
			console.log('No he podido escribirlo');
		} else {
			console.log('Se ha escrito correctamente');
		}
	});
}

//leer(__dirname + '/archivo.txt', console.log);
// escribir(
// 	__dirname + '/archivo2.txt',
// 	'Soy un archivo nuevo creado por fs function',
// 	console.log('me he creado en:' + __dirname)
// );
function borrar(ruta, cb) {
	fs.unlink(ruta, cb);
}
borrar(__dirname + '/archivo2.txt', console.log);
