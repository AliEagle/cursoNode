const sharp = require('sharp');

sharp('./JS.png').resize(200).grayscale().toFile('resized.png');
