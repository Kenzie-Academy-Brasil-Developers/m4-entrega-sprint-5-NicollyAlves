import { Request, Response } from "express"
import { IScheduleRequest } from "../interfaces/schedules"
import createScheduleService from "../services/schedules/createSchedules.service"
import listScheduleService from "../services/schedules/listSchedule.service"

const createScheduleController = async (req: Request, res: Response) => {
    const scheduleData: IScheduleRequest = req.validBody
    const newSchedule = await createScheduleService(scheduleData)
    return res.status(201).json(newSchedule)
}

const listScheduleController = async (req: Request, res: Response) => {
    const schedules = await listScheduleService(req.params.schedule_id)
    return res.status(200).json(schedules)
}

export { createScheduleController, listScheduleController }