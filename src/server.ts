import exp from "constants";
import express from "express"

const app = express();

const PORT = 5050;

app.use(express.json())

require("./rotas/autores")(app)
require("./rotas/livros")(app)

app.get('/', (req, res) => {
    res.send("Olá, mundo");
})

app.listen(PORT, () => {
    console.log("Servidor Rodando")
})