import jwt from "jsonwebtoken"
import "dotenv/config"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { compare } from "bcryptjs"
import { IUserLogin } from "../../interfaces/users"

const createSessionService = async ({email, password}: IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })

    const passwordMatch = await compare(password, user.password)

    if(!user.isActive){
        throw new AppError("User is not active", 400)
    }

    if(!passwordMatch){
        throw new AppError("User or password invalid", 403)
    }

    const token = jwt.sign(
        {
            isAdm: user.isAdm
        },
        process.env.SECRET_KEY,
        {
            subject: String(user.id),
            expiresIn: "24h"
        }
    )

    return token
}

export default createSessionService