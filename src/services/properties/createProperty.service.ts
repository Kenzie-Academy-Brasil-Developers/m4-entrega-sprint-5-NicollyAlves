import AppDataSource from "../../data-source"
import { Address } from "../../entities/addresses.entity"
import { Categories } from "../../entities/categories.entity"
import { Properties } from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"
import { IPropertyRequest, IPropertyResponse } from "../../interfaces/properties"
import { propertyResponseSerializer } from "../../serializers/properties.serializers"
const createPropertyService = async (propertyData: IPropertyRequest): Promise<IPropertyResponse> => {
    const propertyRepository = AppDataSource.getRepository(Properties)
    const categoryRepository = AppDataSource.getRepository(Categories)
    const addressRepository = AppDataSource.getRepository(Address)

    const category = await categoryRepository.findOneBy({
        id: propertyData.categoryId
    })
    const addressCreate = addressRepository.create(propertyData.address)
    await addressRepository.save(addressCreate)

    const property = await propertyRepository.findOneBy({
        address: propertyData.address,
    })
    const propertyZipCode = await addressRepository.findOneBy({
        zipCode: propertyData.address.zipCode
    })
    
    const propertyState = await addressRepository.findOneBy({
        state: propertyData.address.state
    })    
    
    if(property) {
        throw new AppError("Property already exists", 409)
    }

    if(!category) {
        throw new AppError("CategoryId is invalid", 404)
    }

    if(propertyZipCode.zipCode.length > 8) {
        throw new AppError("ZipCode is invalid", 400)
    }

    if(propertyState.state.length > 2) {
        throw new AppError("State is invalid", 400)
    } 

    const newProperty = {address: addressCreate, category: category, size: propertyData.size, value: propertyData.value}
    const createdProperty = propertyRepository.create(newProperty)
    await propertyRepository.save(createdProperty)
    
    const responseProperty = {...createdProperty, category: category.id}

    const propertyRes = await propertyResponseSerializer.validate(responseProperty, {
        stripUnknown: true
    })

    return propertyRes
}

export default createPropertyService