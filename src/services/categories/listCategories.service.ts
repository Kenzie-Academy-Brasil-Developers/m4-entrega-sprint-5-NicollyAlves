import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"

const listCategoriesService = async() => {
    const categoryRepository = AppDataSource.getRepository(Categories)
    const categories = await categoryRepository.find({
        relations: {
            properties: true
        }
    })

    return categories
}

export default listCategoriesService