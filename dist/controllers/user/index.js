"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDoctor = void 0;
const Doctor_1 = require("src/models/Doctor");
const errorHandler_1 = require("src/middlewares/errorHandler/errorHandler");
const createDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, phone, name, spec } = req.body;
    try {
        yield Doctor_1.Doctor.create({ email, phone, name, spec });
        res.send({ success: true });
    }
    catch (error) {
        console.log(error);
        return (0, errorHandler_1.errorHandler)({ err_code: null, req, res });
    }
});
exports.createDoctor = createDoctor;
