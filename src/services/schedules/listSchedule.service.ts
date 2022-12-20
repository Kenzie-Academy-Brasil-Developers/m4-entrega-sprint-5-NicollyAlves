import AppDataSource from "../../data-source"
import { UserProperties } from "../../entities/schedules_user_properties.entity"
import { IScheduleRequest, IScheduleResponse } from "../../interfaces/schedules"

const listScheduleService = async(schedule_id: string): Promise<IScheduleResponse> => {
    const scheduleRepository = AppDataSource.getRepository(UserProperties)
    const schedule = await scheduleRepository.findOne({
        where: {id: schedule_id},
        relations: {
            user: true,
            property: true,
        }
    })

    console.log(schedule);
    

    return schedule
}

export default listScheduleService