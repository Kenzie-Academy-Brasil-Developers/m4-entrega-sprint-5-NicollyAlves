import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureValidateDataMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    /* const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: req.params.id})
    if(!user.isActive || !user.isAdm){
        throw new AppError("User is not active/adm", 401)
    }

    return next() */
    const data = Object.keys(req.body)
    if(data.includes("isAdm") || data.includes("isActive") || data.includes("id")){
        throw new AppError("Invalid body", 401)
    }

    return next()
}

export default ensureValidateDataMiddleware