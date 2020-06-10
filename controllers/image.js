//Middleware de controle da image.js aqui recebe o req e res para que seja tratado os dados
module.exports = {
    index(req, res) {
        res.send(`The image: Index controller ${req.params.image_id}`)
    },
    create(req, res) {
        res.send('The image: create POST controller')
    },
    like (req, res) {
        res.send('The image: Like POST controller')
    },
    comment (req, res) {
        res.send("the image")
    }

}