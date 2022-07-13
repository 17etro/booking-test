import { Request, Response } from "express";
import moment from "moment";

import { User, IUser } from "../../models/User";
import { Doctor } from "../../models/Doctor";
import { Appointment } from "../../models/Appointment";
import { errorHandler } from "../../services/errorHandler/errorHandler";

export const createAppointment = async (req: Request, res: Response) => {
  const { userId, doctorId, date } = req.body as {
    userId: string;
    doctorId: string;
    date: Date;
  };

  if (!userId) {
    return errorHandler({ err_code: 0, req, res });
  }

  if (!doctorId) {
    return errorHandler({ err_code: 1, req, res });
  }

  if (!date || moment() > moment(date)) {
    return errorHandler({ err_code: 4, req, res });
  }

  let user: IUser | null;
  try {
    user = await User.findById(userId);
    if (!user) {
      return errorHandler({ err_code: 2, req, res });
    }
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: 2, req, res });
  }

  try {
    const isDoctorExists = await Doctor.findById(doctorId);
    if (!isDoctorExists) {
      return errorHandler({ err_code: 3, req, res });
    }
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: 3, req, res });
  }

  try {
    const activeAppointmentsCount = await Appointment.count({
      doctor: doctorId,
      active: true,
    });
    if (activeAppointmentsCount >= 3) {
      return errorHandler({ err_code: 5, req, res });
    }

    const resultAppointment = await Appointment.create({
      doctor: doctorId,
      user: userId,
      date,
    });

    const newUserAppointments = user.appointments
      .filter((appointment) => appointment._id !== resultAppointment._id)
      .concat(resultAppointment);

    await User.findOneAndUpdate(
      { _id: userId },
      { appointments: newUserAppointments }
    );

    res.send({ appointment: resultAppointment });
  } catch (error) {
    console.log(error);
    errorHandler({ err_code: null, req, res });
  }
};

export const acceptAppointment = async (req: Request, res: Response) => {
  // without checking auth
  const { appointmentId } = req.body as { appointmentId: string };

  if (!appointmentId) {
    return errorHandler({ err_code: 6, req, res });
  }

  try {
    await Appointment.findById(appointmentId);
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: 6, req, res });
  }

  try {
    const updatedAppointment = await Appointment.findOneAndUpdate(
      { _id: appointmentId },
      { active: true }
    );

    if (updatedAppointment) {
      const doctor = await Doctor.findById(updatedAppointment?.doctor);

      if (!doctor) return errorHandler({ err_code: 7, req, res });

      const newDoctorAppointments = doctor.appointments_accepted
        .filter((appointment) => appointment._id !== appointmentId)
        .concat([updatedAppointment]);

      await Doctor.findByIdAndUpdate(
        { _id: doctor?._id },
        { appointments_accepted: newDoctorAppointments }
      );
      res.send({ appointment: { ...updatedAppointment, active: true } });
    }
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: null, req, res });
  }
};

export const rejectAppointment = async (req: Request, res: Response) => {
  // without checking auth
  const { appointmentId } = req.body as { appointmentId: string };

  if (!appointmentId) {
    return errorHandler({ err_code: 6, req, res });
  }

  try {
    await Appointment.findById(appointmentId);
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: 6, req, res });
  }

  try {
    await Appointment.findOneAndDelete(
      { _id: appointmentId },
      { active: true }
    );
    res.sendStatus(204);
    res.send({});
  } catch (error) {
    console.log(error);
    return errorHandler({ err_code: null, req, res });
  }
};
