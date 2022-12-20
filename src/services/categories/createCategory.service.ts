import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest, ICategoryResponse } from "../../interfaces/categories";
import { categoryResponseSerializer } from "../../serializers/categories.serializers";

const createCategoryService = async (categoryData: ICategoryRequest): Promise<ICategoryResponse> => {
    const categoryRepository = AppDataSource.getRepository(Categories)

    const category = await categoryRepository.findOneBy({
        name: categoryData.name
    })

    if(category) {
        throw new AppError("Category already exists", 409)
    }

    const createdCategory = categoryRepository.create(categoryData)
    await categoryRepository.save(createdCategory)

    const categoryResponse = await categoryResponseSerializer.validate(createdCategory, {
        stripUnknown: true
    })

    return categoryResponse
}

export default createCategoryService