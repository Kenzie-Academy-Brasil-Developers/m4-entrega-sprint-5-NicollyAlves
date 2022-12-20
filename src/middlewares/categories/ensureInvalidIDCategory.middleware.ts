import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";

const ensureInvalidIDCategoryMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(Categories)
    const category = await userRepository.findOneBy({id: req.params.id})
    if(!category){
        throw new AppError("Invalid id", 404)
    }

    return next()
}

export default ensureInvalidIDCategoryMiddleware