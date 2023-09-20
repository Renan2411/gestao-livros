const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
import { autorSchema } from "../validation-request/AutorValidationRequest";

export const autorController = {

    async criar(autor: any) {

        try {
            await autorSchema.validate(autor)
            return await prisma.autores.create({
                data: autor
            })
        } catch (error: any) {
            throw new Error(error.errors);
        }

    },

    async listarTodos() {
        return await prisma.autores.findMany();
    },

    async buscarPorId(autorId: Number) {
        return await prisma.autores.findUnique({
            where: {
                id: autorId
            }
        });
    },

    async editar(autorId: Number, autor: any) {
        return await prisma.autores.update({
            where: {
                id: autorId
            },
            data: autor
        })
    },

    async deletar(autorId: Number) {
        return await prisma.autores.delete({
            where: { id: autorId }
        })
    }

}