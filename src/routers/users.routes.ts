import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureInvalidIDMiddleware from "../middlewares/ensureInvalidID.middleware";
import ensureIsActiveMiddleware from "../middlewares/ensureIsActive.middleware";
import ensureValidateDataMiddleware from "../middlewares/ensureIsActiveValue.middleware";
import ensureIsActiveValueMiddleware from "../middlewares/ensureIsActiveValue.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import { userSerializer, userUpdateSerializer } from "../serializers/user.serializers";

const userRoutes = Router()

userRoutes.post("", ensureDataIsValidMiddleware(userSerializer), createUserController)
userRoutes.get("", ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController)
userRoutes.delete("/:id", ensureAuthMiddleware, ensureInvalidIDMiddleware, ensureIsActiveMiddleware, ensureIsAdmMiddleware, deleteUserController)
userRoutes.patch("/:id", ensureAuthMiddleware, ensureValidateDataMiddleware, ensureDataIsValidMiddleware(userUpdateSerializer), ensureInvalidIDMiddleware, updateUserController)

export default userRoutes