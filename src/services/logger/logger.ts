import moment from "moment";

export const logDayStringSample = ({
  name,
  date,
  doctorSpec,
}: {
  name: string;
  date: Date;
  doctorSpec: string;
}) => {
  return `${moment().format(
    "DD.MM.YYYY HH:mm:SS"
  )} | Привет ${name}! Напоминаем что вы записаны к ${doctorSpec} завтра в ${moment(
    date
  ).format("DD.MM.YYYY HH:mm:SS")}! \n\n`;
};

export const logTwoHoursStringSample = ({
  name,
  date,
  doctorSpec,
}: {
  name: string;
  date: Date;
  doctorSpec: string;
}) => {
  return `${moment().format(
    "DD.MM.YYYY HH:mm:SS"
  )} | Привет ${name}! Вам через 2 часа к ${doctorSpec}, в ${moment(
    date
  ).format("DD.MM.YYYY HH:mm:SS")}! \n\n`;
};
