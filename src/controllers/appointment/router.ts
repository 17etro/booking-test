import { Router } from "express";

import { createAppointment, acceptAppointment, rejectAppointment } from ".";

const appointmentRouter = Router();

appointmentRouter.post("/appointment", createAppointment);

appointmentRouter.post("/accept-appointment", acceptAppointment);

appointmentRouter.post("/reject-appointment", rejectAppointment);

export { appointmentRouter };
