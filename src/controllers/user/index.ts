import { Request, Response } from "express";

import { User } from "../../models/User";
import { errorHandler } from "../../services/errorHandler/errorHandler";

export const createUser = async (req: Request, res: Response) => {
  const { email, phone, name } = req.body;

  try {
    await User.create({ email, phone, name });
    res.send({ success: true });
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: null, req, res });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  try {
    const user = await User.findById(id).populate("appointments");
    res.send({ user });
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: null, req, res });
  }
};
