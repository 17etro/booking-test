"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DEFAULT_USER_ICON_1 = require("src/constants/DEFAULT_USER_ICON");
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    photo_avatar: {
        type: String,
        required: false,
        default: DEFAULT_USER_ICON_1.DEFAULT_USER_ICON,
    },
    phone: { type: String, required: false },
    name: String,
    appointments: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "appointment" }],
});
const User = mongoose_1.default.model("user", userSchema);
exports.User = User;
