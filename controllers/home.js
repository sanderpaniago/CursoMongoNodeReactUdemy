//Middleware de controle da home.js aqui recebe o req e res para que seja tratado os dados
module.exports = {
    index(req, res) {
        res.send('The home: Index controller')
    }
}