import * as yup from "yup"

export const livroSchema = yup.object().shape({
    titulo: yup.string().required("O Título é obrigatório").max(255, "O título deve conter no máximo 255 carcteres"),
    dataPublicacao: yup.string().required("A data de publicação é obrigatória"),
    isbn: yup.string().required("ISBN é obrigatória"),
    preco: yup.number().required("ISBN é obrigatória").positive(),
    autorId: yup.string().required("O autor é obrigatório")
})