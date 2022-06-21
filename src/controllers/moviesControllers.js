const movies = require("../models/movies.json");
// visualizar todos os filmes

const getAll = (request, response) => {
    response.status(200).send(movies);

    // if(!movies){
    //     response.status(404).send({
    //         "message": "não foi possível acessar a lista de filmes"
    //     })
    // }
};

module.exports = {getAll};