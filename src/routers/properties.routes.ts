import { Router } from "express"
import { listPropertiesController } from "../controllers/properties.controllers"

const propertyRoutes = Router()

propertyRoutes.post("")
propertyRoutes.get("", listPropertiesController)

export default propertyRoutes