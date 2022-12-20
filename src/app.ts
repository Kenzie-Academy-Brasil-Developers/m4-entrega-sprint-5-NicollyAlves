import "express-async-errors"
import "reflect-metadata"
import express from "express"
import userRoutes from "./routers/users.routes"
import sessionRoutes from "./routers/session.routes"
import handleError from "./errors/handleError"
import categoryRoutes from "./routers/categories.routes"
import scheduleRoutes from "./routers/schedules.routes"
import propertyRoutes from "./routers/properties.routes"


const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", sessionRoutes)
app.use("/categories", categoryRoutes)
app.use("/schedules", scheduleRoutes)
app.use("/properties", propertyRoutes)

app.use(handleError)

export default app