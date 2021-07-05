const { exec, spawn } = require('child_process'); // Es lo mismo que - const exec = require('child_process').exec pero en ES6

// exec('node consola.js', (error, stdout, stderr) => {
// 	if (error) {
// 		console.log(error);
// 		return false;
// 	}
// 	console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
	console.log('Está muero?');
	console.log(proceso.killed);
	console.log(dato.toString());
});

proceso.on('exit', function () {
	console.log('El proceso terminó');
	console.log(proceso.killed);
});
