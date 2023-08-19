import httpStatus from "http-status";
import logger from "./LogUtils.js";

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    logger.error(err);
    const errorStatus = httpStatus.INTERNAL_SERVER_ERROR;
    res.status(errorStatus).send({
      message: err.message,
      timestamp: Date.now(),
    });
  });
};

export default catchAsync;
