import { Request, Response } from "express";

import { Doctor } from "../../models/Doctor";
import { errorHandler } from "../../services/errorHandler/errorHandler";

export const createDoctor = async (req: Request, res: Response) => {
  const { email, phone, name, spec } = req.body;

  try {
    await Doctor.create({ email, phone, name, spec });
    res.send({ success: true });
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: null, req, res });
  }
};

export const getDoctorById = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  try {
    const doctor = await Doctor.findById(id).populate("appointments_accepted");
    res.send({ doctor });
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: null, req, res });
  }
};
