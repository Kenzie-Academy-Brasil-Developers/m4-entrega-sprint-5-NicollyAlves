import AppDataSource from "../../data-source"
import { Schedule } from "../../entities/schedules_user_properties.entity"
import { IScheduleResponse } from "../../interfaces/schedules"

const listScheduleService = async(schedule_id: string): Promise<Schedule> => {
    const scheduleRepository = AppDataSource.getRepository(Schedule)
    const schedule = await scheduleRepository.findOne({
        where: {id: schedule_id},
        relations: {
            user: true,
            property: true,
        }
    })    
    return schedule
}

export default listScheduleService