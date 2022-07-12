import { Router } from "express";

import { doctorRouter } from "./doctor/router";
import { userRouter } from "./user/router";

const router = Router();

router.use(doctorRouter);
router.use(userRouter);

export { router };
