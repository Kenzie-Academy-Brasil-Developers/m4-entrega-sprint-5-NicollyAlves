import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"

const listPropertiesService = async() => {
    const categoryRepository = AppDataSource.getRepository(Properties)
    const properties = await categoryRepository.find({
        relations: {
            address: true,
            category: true,
            schedules: true
        }
    })

    return properties
}

export default listPropertiesService