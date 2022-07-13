import cron from "cron";
import dotenv from "dotenv";
import moment from "moment";
import fs from "fs";

import { dbConnection } from "../db/connection";
import { Appointment, IAppointment } from "../models/Appointment";
import { User } from "../models/User";
import { Doctor } from "../models/Doctor";
import {
  logDayStringSample,
  logTwoHoursStringSample,
} from "../services/logger/logger";

dotenv.config();

const RESTART_MINUTES_TIME = 10;
const DEVIATION = RESTART_MINUTES_TIME * 60 * 1000;

const logDeviation = async (
  appointment: IAppointment,
  type: "day" | "two-hours"
) => {
  const user = await User.findById(appointment.user);
  const doctor = await Doctor.findById(appointment.doctor);

  const loggerFunc =
    type === "day" ? logDayStringSample : logTwoHoursStringSample;

  if (user && doctor) {
    fs.appendFileSync(
      `${__dirname}/file.log`,
      loggerFunc({
        name: user.name,
        doctorSpec: doctor.spec,
        date: appointment.date,
      })
    );
  }
};

export const job = new cron.CronJob(
  `*/10 * * * * *`,
  //`*/${RESTART_MINUTES_TIME} * * * *`,
  async function () {
    await dbConnection();

    const allApointments = await Appointment.find();

    for (const appointment of allApointments) {
      if (moment() > moment(appointment.date)) {
        Appointment.findOneAndDelete({ _id: appointment._id });
        continue;
      }

      const thisDatePlusDay = moment().add(1, "day");
      const thisDatePlusTwoHours = moment().add(2, "hours");
      const appointmentDate = moment(appointment.date);

      if (Math.abs(appointmentDate.diff(thisDatePlusDay)) <= DEVIATION) {
        logDeviation(appointment, "day");
        continue;
      }

      if (Math.abs(appointmentDate.diff(thisDatePlusTwoHours)) <= DEVIATION) {
        logDeviation(appointment, "two-hours");
        continue;
      }
    }
  },
  null,
  true,
  "Europe/Kiev"
);

job.start();
