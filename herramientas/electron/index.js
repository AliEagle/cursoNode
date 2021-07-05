//! Para correr electron en el wsl podemos forzar la utilización de la GUI de windows con el siguiente script en json
//!"install-wsl": "npm install && npm uninstall electron && export npm_config_platform=win32 && npm install electron && unset npm_config_platform"
//! Lo ejecutamos y despues ejecutamos el start script

const { app, BrowserWindow } = require('electron');

let ventanaPrincipal;

app.on('ready', crearVentana);

function crearVentana() {
	ventanaPrincipal = new BrowserWindow({
		width: 800,
		height: 800,
	});
	ventanaPrincipal.loadFile('index.html');
}
