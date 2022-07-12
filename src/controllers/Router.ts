import { Router } from "express";

import { getAppointments } from "./appointment";

const router = Router();

router.get("/appointments", getAppointments);

export { router };
