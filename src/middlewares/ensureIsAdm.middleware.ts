import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";


const ensureIsAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: req.params.id})    

    const { isAdm } = req.user
    if(!isAdm){
        throw new AppError("User is not adm", 403)
    }

    return next()
}

export default ensureIsAdmMiddleware