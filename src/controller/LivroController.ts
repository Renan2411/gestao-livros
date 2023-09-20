const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
import { autorController } from "./AutorController";

export const livroController = {

    async criar(livro: any) {
        return await prisma.livros.create({
            data: {
                titulo: livro.titulo,
                descricao: livro.descricao,
                dataPublicacao: livro.dataPublicacao,
                isbn: livro.isbn,
                preco: livro.preco,
                autor: {
                    connect: {
                        id: parseInt(livro.autorId)
                    }
                }
            }
        })
    },

    async listarTodos() {
        return await prisma.livros.findMany();
    },

    async buscarPorId(livroId: Number) {
        return await prisma.livros.findUnique({
            where: {
                id: livroId
            }
        });
    },

    async buscarTodosPorAutor(autorId: Number){
        return await prisma.livros.findMany({
            where: {
                autorId: autorId
            }
        })
    },

    async editar(livroId: Number, livro: any) {
        return await prisma.livros.update({
            where: {
                id: livroId
            },
            data: {
                titulo: livro.titulo,
                descricao: livro.descricao,
                dataPublicacao: livro.dataPublicacao,
                isbn: livro.isbn,
                preco: livro.preco,
                autor: {
                    connect: {
                        id: parseInt(livro.autorId)
                    }
                }
            }
        })
    },

    async deletar(livroId: Number) {
        return await prisma.livros.delete({
            where: { id: livroId }
        })
    }

}