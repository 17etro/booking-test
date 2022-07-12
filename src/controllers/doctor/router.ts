import { Router } from "express";

import { createDoctor } from ".";

const doctorRouter = Router();

doctorRouter.post("/doctor", createDoctor);

export { doctorRouter };
