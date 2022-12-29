import { Router } from "express";
import { createScheduleController, listScheduleController } from "../controllers/schedules.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureInvalidIDMiddleware from "../middlewares/ensureInvalidID.middleware";
import ensureInvalidPropertyIdMiddleware from "../middlewares/ensureInvalidPropertyId.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import { scheduleSerializer } from "../serializers/schedules.serializers";

const scheduleRoutes = Router()

scheduleRoutes.post("", ensureAuthMiddleware, ensureDataIsValidMiddleware(scheduleSerializer), createScheduleController)
scheduleRoutes.get("/properties/:id", ensureAuthMiddleware, ensureIsAdmMiddleware, ensureInvalidPropertyIdMiddleware, listScheduleController)

export default scheduleRoutes