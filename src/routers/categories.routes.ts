import { Router } from "express";
import { createCategoryController, listCategoriesController, listCategoryController } from "../controllers/categories.controllers";
import ensureInvalidIDCategoryMiddleware from "../middlewares/categories/ensureInvalidIDCategory.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const categoryRoutes = Router()

categoryRoutes.post("", ensureAuthMiddleware, ensureIsAdmMiddleware, createCategoryController)
categoryRoutes.get("", listCategoriesController)
categoryRoutes.get("/:id/properties", ensureInvalidIDCategoryMiddleware, listCategoryController)

export default categoryRoutes