import { Router } from "express";

import { doctorRouter } from "./doctor/router";
import { userRouter } from "./user/router";
import { appointmentRouter } from "./appointment/router";

const router = Router();

router.use(doctorRouter);
router.use(userRouter);
router.use(appointmentRouter);

export { router };
