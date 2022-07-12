"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const doctor_1 = require("src/types/doctor");
const DEFAULT_USER_ICON_1 = require("src/constants/DEFAULT_USER_ICON");
const doctorSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    photo_avatar: {
        type: String,
        required: false,
        default: DEFAULT_USER_ICON_1.DEFAULT_USER_ICON,
    },
    phone: { type: String, required: false },
    name: String,
    spec: {
        type: String,
        enum: doctor_1.EDoctorType,
    },
    free: Boolean,
    appointments_accepted: [
        { type: mongoose_1.default.Schema.Types.ObjectId, ref: "appointment" },
    ],
});
const Doctor = mongoose_1.default.model("doctor", doctorSchema);
exports.Doctor = Doctor;
