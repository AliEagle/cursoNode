function otraFuncion() {
	return seRompe();
}

function seRompe() {
	return 3 + z;
}

function seRompeAsync(cb) {
	setTimeout(function () {
		try {
			return 3 + z;
		} catch (error) {
			console.error('error en my funcion async');
			cb(error);
		}
	});
}

try {
	//otraFuncion();
	seRompeAsync((error) => console.log(error.message));
} catch (error) {
	console.error('Vaya, algo se ha roto..');
	console.error(error.message); //z is not defined
}

console.log('esto de aqui está al final');
