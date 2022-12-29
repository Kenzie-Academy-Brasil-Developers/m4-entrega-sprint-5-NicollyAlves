import * as yup from "yup"
import { SchemaOf } from "yup"
import { IPropertyRequest, IPropertyResponse } from "../interfaces/properties"

const propertySerializer: SchemaOf<IPropertyRequest> = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: yup.object({
        district: yup.string().required(),
        zipCode: yup.string().required(),
        number: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
    }),
    categoryId: yup.string().required(),
})

const propertyResponseSerializer: SchemaOf<IPropertyResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    value: yup.number().notRequired(),
    size: yup.number().notRequired(),
    address: yup.object({
        id: yup.string().notRequired(),
        district: yup.string().notRequired(),
        zipCode: yup.string().notRequired(),
        number: yup.string().notRequired(),
        city: yup.string().notRequired(),
        state: yup.string().notRequired(),
    }),
    category: yup.string().required(),
    sold: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
})

export { propertySerializer, propertyResponseSerializer }