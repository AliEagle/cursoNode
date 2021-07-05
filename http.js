const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
	console.log('nueva petición');
	console.log(req.url);
	res.writeHead(201, { 'content-type': 'text/html; charset=utf-8' });

	switch (req.url) {
		case '/hola':
			let saludo = hola();
			res.write(saludo);
			res.end();
			break;

		default:
			res.write('Error 404: No sé lo que quieres');
			res.end();
	}

	// //Escribir respuesta al usuario
	// res.write('Hola, ya sé usar HTTP de node.js');

	// res.end();
}

function hola() {
	return 'Hola que tal';
}

console.log('Escuchando http en el puerto 3000');
