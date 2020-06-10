const express = require('express')
const config = require('./server/configure')
const app = express()

app.set('port', process.env.PORT || 3300)
app.set('viewa', `${__dirname}/views`)
app = config(app)



app.listen(app.get('port'), () => console.log(`Server up: http://localhost:${app.get('port')}`))