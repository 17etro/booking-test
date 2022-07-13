import { Router } from "express";

import { createDoctor, getDoctorById } from ".";

const doctorRouter = Router();

doctorRouter.post("/doctor", createDoctor);
doctorRouter.get("/doctor/:id", getDoctorById);

export { doctorRouter };
