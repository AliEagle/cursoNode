const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf8');
// readableStream.on('data', function (chunk) {
// 	data += chunk;
// });

// readableStream.on('end', function () {
// 	console.log(data);
// });

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');

//-- Haciendo el ejemplo con uso de unciones prototipales (a la vieja escuela)
// const Transform = stream.Transform;

// function Mayus() {
// 	Transform.call(this);
// }
// util.inherits(Mayus, Transform);

// Mayus.prototype._transform = function (chunk, codificacion, callback) {
// 	let chunkMayus = chunk.toString().toUpperCase();
// 	this.push(chunkMayus);
// 	callback();
// };

// let mayus = new Mayus();

// readableStream.pipe(mayus).pipe(process.stdout);

//-- Lo mismo de arriba pero usando clases como mejor práctica

const Transform = stream.Transform;
class MayusC extends Transform {
	_transform(chunk, codif, cb) {
		let chunkMayus = chunk.toString().toUpperCase();
		this.push(chunkMayus);
		cb();
	}
}

let mayusC = new MayusC();
readableStream.pipe(mayusC).pipe(process.stdout);
