import catchAsync from "../shared/CatchAsync.js";
import logger from "../shared/LogUtils.js";
import httpStatus from "http-status";

const healthCheck = catchAsync(async (req, res) => {
  const response = {
    message: "OK",
    timestamp: Date.now(),
  };
  logger.info("health check called!");
  res.status(httpStatus.OK).send(response);
});

export { healthCheck };
