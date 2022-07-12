"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorRouter = void 0;
const express_1 = require("express");
const _1 = require(".");
const doctorRouter = (0, express_1.Router)();
exports.doctorRouter = doctorRouter;
doctorRouter.post("/doctor", _1.createDoctor);
