import { Router } from "express";

import { createUser } from ".";

const userRouter = Router();

userRouter.post("/user", createUser);

export { userRouter };
