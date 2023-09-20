import * as yup from "yup"

export const autorSchema = yup.object().shape({
    nome: yup.string().required("O Nome é obrigatório").max(255, "O nome deve conter no máximo 255 carcteres"),
    dataNascimento: yup.string().required("A data de nascimento é obrigatória"),
    nacionalidade: yup.string().required("A data de nascimento é obrigatória"),
})