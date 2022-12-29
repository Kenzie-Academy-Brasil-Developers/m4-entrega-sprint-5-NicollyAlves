import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { Schedule } from "../../entities/schedules_user_properties.entity"
import { AppError } from "../../errors/AppError"
import { IScheduleRequest, IScheduleResponse } from "../../interfaces/schedules"
import { scheduleResponseSerializer } from "../../serializers/schedules.serializers"

const createScheduleService = async (schedulesData: IScheduleRequest): Promise<IScheduleResponse> => {
    const scheduleRepository = AppDataSource.getRepository(Schedule)
    const propertiesRepository = AppDataSource.getRepository(Properties)

    const scheduleHour = await scheduleRepository.findOneBy({
        hour: schedulesData.hour
    })
    const properties = await propertiesRepository.findOneBy({
        id: schedulesData.propertyId
    })

    if(!properties) {
        throw new AppError("Invalid propertyId", 404)
    }
    if(scheduleHour) {
        throw new AppError("Hour already exists", 409)
    }

    const createdSchedule = scheduleRepository.create(schedulesData)
    await scheduleRepository.save(createdSchedule)
    
    const scheduleResponse = await scheduleResponseSerializer.validate(createdSchedule, {
        stripUnknown: true
    })    

    return { message: "Schedule created", ...scheduleResponse}
}

export default createScheduleService