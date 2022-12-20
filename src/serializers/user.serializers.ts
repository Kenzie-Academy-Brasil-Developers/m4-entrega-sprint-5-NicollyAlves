import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users"

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    updatedAt: yup.date().notRequired(),
    createdAt: yup.date().notRequired()
})

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired()
})

export { userSerializer, userWithoutPasswordSerializer, userUpdateSerializer }