import * as express from "express"
import { scheduleSerializer } from "../../serializers/schedules.serializers"

declare global {
    namespace Express {
        interface Request {
            user: {
                id: string
                isAdm: boolean
            },
            validBody: scheduleSerializer
        }
    }
}