requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});
requirejs(['app/app']);

requirejs(['app/appfisica']);