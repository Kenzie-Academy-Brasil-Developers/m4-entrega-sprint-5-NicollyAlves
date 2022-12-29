import * as yup from "yup"
import { SchemaOf } from "yup"
import { IScheduleRequest, IScheduleResponse } from "../interfaces/schedules"

const scheduleSerializer: SchemaOf<IScheduleRequest> = yup.object().shape({
    userId: yup.string().required(),
    propertyId: yup.string().required(),
    date: yup.string().required(),
    hour: yup.string().required()
})

const scheduleResponseSerializer: SchemaOf<IScheduleResponse> = yup.object().shape({
    user: yup.object({
        id: yup.string().notRequired(),
        name: yup.string().notRequired(),
        email: yup.string().notRequired(),
        isAdm: yup.boolean().notRequired(),
        createdAt: yup.date().notRequired(),
        updatedAt: yup.date().notRequired()
    }),
    property: yup.object({
        id: yup.string().notRequired(),
        value: yup.number().notRequired(),
        size: yup.number().notRequired(),
        category: yup.string().notRequired(),
        address: yup.object({
            district: yup.string().notRequired(),
            zipCode: yup.string().notRequired(),
            number: yup.string().notRequired(),
            city: yup.string().notRequired(),
            state: yup.string().notRequired(),
        }),
        sold: yup.boolean().notRequired(),
        createdAt: yup.date().notRequired(),
        updatedAt: yup.date().notRequired(),
    }),
    date: yup.string().notRequired(),
    hour: yup.string().notRequired(),
    id: yup.string().notRequired(),
    message: yup.string().notRequired(),
    schedules: yup.object().notRequired(),
})

export { scheduleSerializer, scheduleResponseSerializer }