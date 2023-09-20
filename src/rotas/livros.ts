import { livroController } from "../controller/LivroController"

module.exports = (app: any) => {
    app.get('/livros', async (request: any, response: any) => {
        const livros = await livroController.listarTodos()

        return response.status(200).json(livros)
    })

    app.get('/livros/:id', async (request: any, response: any) => {

        livroController.buscarPorId(parseInt(request.params.id))
            .then((autor: any) => {

                if (!autor) {
                    response.status(400).json({
                        "message": "autor não encontrado"
                    })
                }

                response.status(201).json(autor)
            })
            .catch((error: any) => {
                response.status(500).json(error)
            })
    })

    app.post('/livros', (request: any, response: any) => {
        livroController.criar(request.body)
            .then((livro: any) => {
                response.status(201).send({
                    "message": 'Livro criado com sucesso',
                    livro
                })
            })
            .catch((error: any) => {
                response.status(500).json({
                    error
                })
            })

    })

    app.put('/livros/:id', (request: any, response: any) => {
        livroController.editar(parseInt(request.params.id), request.body)
            .then((livro: any) => {
                response.status(200).json({
                    "message": "livro Editado com sucesso!",
                    livro
                })
            })
            .catch((error: any) => {
                response.status(500).json({
                    "erro": error
                })
            })
    })

    app.delete('/livros/:id', (request: any, response: any) => {
        livroController.deletar(parseInt(request.params.id))
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