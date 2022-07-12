import mongoose from "mongoose";

import { DEFAULT_USER_ICON } from "../constants/DEFAULT_USER_ICON";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  photo_avatar: {
    type: String,
    required: false,
    default: DEFAULT_USER_ICON,
  },
  phone: { type: String, required: false },
  name: String,
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "appointment" }],
});

const User = mongoose.model("user", userSchema);

export { User };
