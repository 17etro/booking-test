interface IErrorCodes {
  [key: number]: { message: string; status: number };
}

export const ERROR_CODES: IErrorCodes = {
  1: {
    message: "Some error",
    status: 500,
  },
};
