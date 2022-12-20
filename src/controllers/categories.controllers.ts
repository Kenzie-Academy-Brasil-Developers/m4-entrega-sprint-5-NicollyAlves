import { Request, Response } from "express"
import { ICategoryRequest } from "../interfaces/categories"
import createCategoryService from "../services/categories/createCategory.service"
import listCategoriesService from "../services/categories/listCategories.service"
import listCategoryService from "../services/categories/listCategory.service"

const createCategoryController = async (req: Request, res: Response) => {
    const categoryData: ICategoryRequest = req.body
    const newCategory = await createCategoryService(categoryData)
    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req: Request, res: Response) => {
    const categories = await listCategoriesService()
    res.json(categories)
}

const listCategoryController = async (req: Request, res: Response) => {
    const category = await listCategoryService(req.params.category_id)
    return res.status(200).json(category)
}

export { createCategoryController, listCategoriesController, listCategoryController }