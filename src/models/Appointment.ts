import mongoose from "mongoose";

const appointmentScheme = new mongoose.Schema({
  date: { type: Date, required: true },
  user: { required: true, type: mongoose.Schema.Types.ObjectId, ref: "user" },
  doctor: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  active: Boolean,
});

const Appointment = mongoose.model("appointment", appointmentScheme);

export { Appointment };
