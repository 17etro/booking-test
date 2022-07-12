import { Request, Response } from "express";
import { ERROR_CODES } from "../../constants/ERROR_CODES";

const errorHandler = ({
  err_code,
  req,
  res,
}: {
  err_code: number | null;
  req: Request;
  res: Response;
}) => {
  if (err_code && ERROR_CODES[err_code]) {
    const resultError = ERROR_CODES[err_code];

    return res.json({
      status: resultError.status,
      message: resultError.message,
    });
  }

  return res.json({
    status: 500,
    message: "Something went wrong",
  });
};

export { errorHandler };
