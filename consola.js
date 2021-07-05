var tabla = [
	{
		a: 1,
		b: 'z',
	},
	{
		a: 3,
		b: 'go',
	},
];
console.table(tabla);

console.info('Soy un console info');
console.error('Soy un console error');
console.warn('Soy un console warn');

console.group('Conversacion');
console.log('Hola');
console.log('Adios');
console.log('Blablabla');
console.groupEnd('Conversacion');
console.log('De otro tipo');

function function1() {
	console.group('function1');
	console.log('Esto es de la funcion1');
	console.log('Esto tambien');
	console.log('Esto igual');
	function2();
	console.log('Hemos vuelto a la 1');
	console.groupEnd('function1');
}
function function2() {
	console.group('function2');
	console.log('ahora estamos en la funcion2');
	console.groupEnd('function2');
}
console.log('empezamos');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
