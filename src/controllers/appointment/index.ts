import { Request, Response } from "express";

import { errorHandler } from "../../middlewares/errorHandler/errorHandler";

const getAppointments = (req: Request, res: Response) => {
  return errorHandler(1, req, res);
};

export { getAppointments };
