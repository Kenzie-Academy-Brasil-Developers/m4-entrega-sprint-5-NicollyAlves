import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureInvalidIDMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: req.params.id})
    if(!user){
        throw new AppError("Invalid id", 404)
    }

    return next()
}

export default ensureInvalidIDMiddleware