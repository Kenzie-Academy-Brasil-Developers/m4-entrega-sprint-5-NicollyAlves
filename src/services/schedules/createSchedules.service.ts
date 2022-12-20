import AppDataSource from "../../data-source"
import { UserProperties } from "../../entities/schedules_user_properties.entity"
import { AppError } from "../../errors/AppError"
import { IScheduleRequest, IScheduleResponse } from "../../interfaces/schedules"
import { scheduleResponseSerializer } from "../../serializers/schedules.serializers"

const createScheduleService = async (schedulesData: IScheduleRequest): Promise<IScheduleResponse> => {
    const scheduleRepository = AppDataSource.getRepository(UserProperties)

    const schedule = await scheduleRepository.findOneBy({
        hour: schedulesData.hour,
        date: schedulesData.date,
    })


    if(schedule) {
        throw new AppError("Hour already exists", 409)
    }

    const createdSchedule = scheduleRepository.create(schedulesData)
    await scheduleRepository.save(createdSchedule)

    const scheduleResponse = await scheduleResponseSerializer.validate(createdSchedule, {
        stripUnknown: true
    })

    return scheduleResponse
}

export default createScheduleService