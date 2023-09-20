import { autorController } from "../controller/AutorController"
import { livroController } from "../controller/LivroController"

module.exports = (app: any) => {
    app.get('/autores', async (request: any, response: any) => {
        const autores = await autorController.listarTodos()

        return response.status(200).json(autores)
    })

    app.get('/autores/:id', async (request: any, response: any) => {

        autorController.buscarPorId(parseInt(request.params.id))
            .then((autor: any) => {

                if (!autor) {
                    response.status(400).json({
                        "message": "autor não encontrado"
                    })
                }

                response.status(201).json(autor)
            })
            .catch((error: any) => {
                console.log(error)
                response.status(500).json({ error })
            })
    })

    app.get('/autores/:id/livros', (request: any, response: any) => {
        livroController.buscarTodosPorAutor(parseInt(request.params.id))
            .then((livros) => {
                response.status(200).json(livros)
            })
            .catch((error: any) => {
                response.status(500).json(error)
            })
    })

    app.post('/autores', (request: any, response: any) => {
        autorController.criar(request.body)
            .then((autor) => {
                response.status(201).send({
                    "message": 'Autor criado com sucesso',
                    autor
                })
            })
            .catch((error: any) => {
                console.log(error)
                response.status(500).send(error)
            })

    })

    app.put('/autores/:id', (request: any, response: any) => {
        autorController.editar(parseInt(request.params.id), request.body)
            .then((autor: any) => {
                response.status(200).json({
                    "message": "Autor Editado com sucesso!",
                    autor
                })
            })
            .catch((error: any) => {
                response.status(500).json({
                    "erro": error
                })
            })
    })

    app.delete('/autores/:id', (request: any, response: any) => {
        autorController.deletar(parseInt(request.params.id))
            .then((result: any) => {
                response.status(204).json({
                    "message": "Autor deletado com sucesso!"
                })
            })
            .catch((error: any) => {
                response.status(500).json({
                    error
                })
            })
    })
}