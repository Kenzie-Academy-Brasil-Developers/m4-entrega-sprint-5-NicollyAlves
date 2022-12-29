import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureInvalidPropertyIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const propertyRepository = AppDataSource.getRepository(Properties)
    const property = await propertyRepository.findOneBy({id: req.params.id})
    if(!property){
        throw new AppError("Invalid id", 404)
    }

    return next()
}

export default ensureInvalidPropertyIdMiddleware