import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

const ensureDataIsValidMiddleware = (schema: AnySchema) => async(req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedData = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        })
        req.validBody = validatedData
        return next()

    } catch (error) {
        return res.status(400).json({
            error: error.errors
        })
    }
}

export default ensureDataIsValidMiddleware