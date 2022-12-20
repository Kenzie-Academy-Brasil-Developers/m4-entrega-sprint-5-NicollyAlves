import * as yup from "yup"
import { SchemaOf } from "yup"
import { ICategoryRequest, ICategoryResponse } from "../interfaces/categories"

const categorySerializer: SchemaOf<ICategoryRequest> = yup.object().shape({
    name: yup.string().required()
})

const categoryResponseSerializer: SchemaOf<ICategoryResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired()
})


export { categorySerializer, categoryResponseSerializer }