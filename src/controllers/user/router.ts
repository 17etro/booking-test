import { Router } from "express";

import { createUser, getUserById } from ".";

const userRouter = Router();

userRouter.post("/user", createUser);

userRouter.get("/user/:id", getUserById);

export { userRouter };
