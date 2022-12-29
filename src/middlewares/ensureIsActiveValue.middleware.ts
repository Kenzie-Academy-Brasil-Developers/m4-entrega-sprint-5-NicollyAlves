import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureValidateDataMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const data = Object.keys(req.body)
    if(data.includes("isAdm") || data.includes("isActive") || data.includes("id")){
        throw new AppError("Invalid body", 401)
    }

    return next()
}

export default ensureValidateDataMiddleware