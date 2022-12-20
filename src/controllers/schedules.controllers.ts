import { IScheduleRequest } from "../interfaces/schedules"
import listCategoriesService from "../services/categories/listCategories.service"
import createScheduleService from "../services/schedules/createSchedules.service"

const createScheduleController = async (req: Request, res: Response) => {
    const scheduleData: IScheduleRequest = req.body
    const newSchedule = await createScheduleService(scheduleData)
    return res.status(201).json(newSchedule)
}

const listScheduleController = async (req: Request, res: Response) => {
    const categories = await listCategoriesService()
    res.json(categories)
}

export { createScheduleController, listScheduleController }