import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { IUser, IUserRequest } from "../../interfaces/users"
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers"

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
    const userRepository = AppDataSource.getRepository(User)


    const user = await userRepository.findOneBy({
        email: userData.email
    })

    
    if(user) {
        throw new AppError("Email already exists", 409)
    }
    
    const createdUser = userRepository.create(userData)
    await userRepository.save(createdUser)

    const userWithoutPassword = await userWithoutPasswordSerializer.validate(createdUser, {
        stripUnknown: true
    })

    return userWithoutPassword
}

export default createUserService