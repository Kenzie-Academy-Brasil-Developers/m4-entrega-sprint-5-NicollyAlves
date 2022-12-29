import { IPropertyRequest, IPropertyResponse } from "../properties"
import { IUser } from "../users"

export interface IScheduleRequest {
    userId: string
    propertyId: string
    date: string
    hour: string
}

export interface IScheduleResponse {
    user: IUser
    property: IPropertyResponse
    date: string
    hour: string
    id: string
    message?: string
    schedules: object
}
