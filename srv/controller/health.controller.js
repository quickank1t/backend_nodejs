import catchAsync from "../shared/CatchAsync.js";
import logger from "../shared/LogUtils.js";

const healthCheck = catchAsync(async (req, res) => {
  const response = {
    message: "OK",
    timestamp: Date.now(),
  };
  logger.info("health check called!");
  res.send(response);
});

export { healthCheck };
