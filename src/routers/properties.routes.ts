import { Router } from "express"
import { createPropertyController, listPropertiesController } from "../controllers/properties.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware"
import { propertySerializer } from "../serializers/properties.serializers"

const propertyRoutes = Router()

propertyRoutes.post("", ensureAuthMiddleware, ensureIsAdmMiddleware, ensureDataIsValidMiddleware(propertySerializer), createPropertyController)
propertyRoutes.get("", listPropertiesController)

export default propertyRoutes