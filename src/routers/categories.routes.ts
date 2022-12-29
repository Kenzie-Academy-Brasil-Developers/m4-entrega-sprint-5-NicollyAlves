import { Router } from "express";
import { createCategoryController, listCategoriesController, listCategoryController } from "../controllers/categories.controllers";
import ensureInvalidIDCategoryMiddleware from "../middlewares/categories/ensureInvalidIDCategory.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import { categorySerializer } from "../serializers/categories.serializers";

const categoryRoutes = Router()

categoryRoutes.post("", ensureAuthMiddleware, ensureIsAdmMiddleware, ensureDataIsValidMiddleware(categorySerializer), createCategoryController)
categoryRoutes.get("", listCategoriesController)
categoryRoutes.get("/:id/properties", ensureInvalidIDCategoryMiddleware, listCategoryController)

export default categoryRoutes