"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router_1 = require("./doctor/router");
const router = (0, express_1.Router)();
exports.router = router;
router.use(router_1.doctorRouter);
