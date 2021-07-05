//const process = require('process');
//No es necesario importar process ya que es parte del modulo-glabal

process.on('beforeExit', () => {
	console.log('El proceso va a terminar');
});
process.on('exit', () => {
	console.log('Ali, el proceso se acabó');
});
process.on('uncaughtException', (error, origen) => {
	console.error('Vaya, se nos ha olvidado capturar un error');
	console.error(error);
});

functionQueNoExisteParaForzarError();
console.log('Esti si el error no se recoge, no sale');

process.on('uncaughtRejection');
