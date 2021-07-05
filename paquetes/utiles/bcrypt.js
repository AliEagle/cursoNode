const bcrypt = require('bcrypt');

const password = 'linuxsudo33!';

bcrypt.hash(password, 5, function (error, hash) {
	console.log(hash);

	bcrypt.compare(password, hash, function (error, res) {
		console.log(res);
	});
});
