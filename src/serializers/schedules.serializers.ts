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
    user: yup.object().notRequired(),
    property: yup.object().notRequired(),
    date: yup.string().notRequired(),
    hour: yup.string().notRequired(),
    id: yup.string().notRequired()
})

export { scheduleSerializer, scheduleResponseSerializer }