import { Router } from "express";
import { createScheduleController, listScheduleController } from "../controllers/schedules.controllers";

const scheduleRoutes = Router()

scheduleRoutes.post("", createScheduleController)
scheduleRoutes.get("/properties/:id", listScheduleController)

export default scheduleRoutes