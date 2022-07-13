import mongoose from "mongoose";

import { EDoctorType } from "../types/doctor";
import { DEFAULT_USER_ICON } from "../constants/DEFAULT_USER_ICON";
import { IAppointment } from "./Appointment";

interface IDoctor {
  email: string;
  photo_avatar: string;
  phone: string | null;
  name: string;
  spec: EDoctorType;
  free: boolean;
  appointments_accepted: IAppointment[];
}

const doctorSchema = new mongoose.Schema<IDoctor>({
  email: { type: String, required: true, unique: true },
  photo_avatar: {
    type: String,
    required: false,
    default: DEFAULT_USER_ICON,
  },
  phone: { type: String, required: false },
  name: String,
  spec: {
    type: String,
    enum: EDoctorType,
  },
  free: Boolean,
  appointments_accepted: [
    { type: mongoose.Schema.Types.ObjectId, ref: "appointment" },
  ],
});

const Doctor = mongoose.model("doctor", doctorSchema);

export { Doctor, IDoctor };
