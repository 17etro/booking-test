import mongoose from "mongoose";

import { IDoctor } from "./Doctor";
import { IUser } from "./User";

interface IAppointment {
  date: Date;
  user: IUser;
  doctor: IDoctor;
  active: boolean;
  _id: string;
}

const appointmentScheme = new mongoose.Schema<IAppointment>({
  date: { type: Date, required: true },
  user: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  doctor: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  active: { type: Boolean, default: false },
});

const Appointment = mongoose.model("appointment", appointmentScheme);

export { Appointment, IAppointment };
