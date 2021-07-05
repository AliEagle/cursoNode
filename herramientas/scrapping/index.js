const puppeteer = require('puppeteer');
//! Todo puppeteer funciona de manera asincrona

//! Función autoejecutada
const EXECUTABLE_PATH = '/usr/bin/google-chrome';

(async () => {
	console.log('Lanzamos navegador');
	const browser = await puppeteer.launch({
		executablePath: EXECUTABLE_PATH,

		headless: false,
		ignoreDefaultArgs: ['--disable-extensions'],
	});

	console.log('Cerramos navegador');
	browser.close();
	console.log('Navegador cerrado');
})();
