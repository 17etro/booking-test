interface IErrorCodes {
  [key: number]: { message: string; status: number; err_code: number };
}

export const ERROR_CODES: IErrorCodes = {
  0: {
    message: "User id is empty",
    err_code: 0,
    status: 500,
  },
  1: {
    message: "Doctor id is empty",
    status: 500,
    err_code: 1,
  },
  2: {
    message: "User with this id does not exist",
    status: 500,
    err_code: 2,
  },
  3: {
    message: "Doctor with this id does not exist",
    status: 500,
    err_code: 3,
  },
  4: {
    message: "Please enter valid date",
    status: 500,
    err_code: 4,
  },
  5: {
    message: "This doctor is busy",
    status: 500,
    err_code: 5,
  },
  6: {
    message: "Enter correct appointment id",
    status: 500,
    err_code: 6,
  },
  7: {
    message: "Can not find a doctor with appointment id",
    status: 500,
    err_code: 7,
  },
};
