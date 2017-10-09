# Usage


(function() {
    var preloader = new WebfontPreloader();

    preloader.preload('Roboto', '400');
    preloader.preload('Material Icons', '400');

    preloader.on('preloadReady', function(e) {
        console.log('ready');
        preloader.off('preloadReady');
    });

    preloader.runPreloader();
})();
