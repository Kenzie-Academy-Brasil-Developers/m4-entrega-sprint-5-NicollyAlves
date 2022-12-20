import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { ICategoryResponse } from "../../interfaces/categories"

const listCategoryService = async(category_id: string): Promise<ICategoryResponse> => {
    const categoryRepository = AppDataSource.getRepository(Categories)
    const category = await categoryRepository.findOne({
        where: {id: category_id},
        relations: {
            properties: true
        }
    })

    return category
}

export default listCategoryService