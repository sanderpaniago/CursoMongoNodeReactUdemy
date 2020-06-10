const express = require('express')
const config = require('./server/configure')
let app = express()

// Faz a configuração basica do serivdor com a stancia app
app.set('port', process.env.PORT || 3300)
app.set('views', `${__dirname}/views`)
// Recebe as configurações do arquivo configure.js pelo objeto exportado.
app = config(app)

// Abre a coneção do servidor com a porta definida nas configurações.
app.listen(app.get('port'), () => console.log(`Server up: http://localhost:${app.get('port')}`))