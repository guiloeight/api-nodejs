const express = require("express");
const app = express();
//instanciando express
const cors = require("cors");
app.use(cors());
//cors é boa prática para API
app.use(express.json());
// instanciar o formato de arquivo json, tornam possível a leitura das infos que chegam no body da req.
const movies = require("./routes/moviesRoutes");
app.use("/movies", movies)
//define a rota principal do projeto
module.exports = app;
//exporta o app para o arquivo todo