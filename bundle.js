var bundle = require('browserify')({
	standalone: 'WebfontPreloader'
});
var fs = require('fs');


bundle.add('./src/webfont-preloader');
bundle.bundle().pipe(fs.createWriteStream('./dist/webfont-preloader.bundle.js'));
