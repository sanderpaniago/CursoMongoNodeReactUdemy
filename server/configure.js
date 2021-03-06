const path = require('path'),
    routes = require('./routes'),
    exphbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methdOverride = require('method-override'),
    errorHandler = require('errorhandler')

// Exporta um objeto app para o aquivo server.js
module.exports = (app) => {
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({'extended': true}))
    app.use(methdOverride())
    app.use(cookieParser('some-secret-value-here'))
    routes(app)
    app.use('/public/', express.static(path.join(__dirname, '../public')))

if('development' === app.get('env')) {
    app.use(errorHandler())
}
    return app
}

// Responsavel por configurar o servidor.