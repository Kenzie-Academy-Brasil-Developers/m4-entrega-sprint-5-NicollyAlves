import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

const listUsersService = async() => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const removePass = users.map((el) => {
        const { password: pass, ...user} = el

        return user
    })    
    return removePass
}

export default listUsersService