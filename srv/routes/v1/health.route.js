import express from "express";
import logger from "../../shared/LogUtils.js";

const router = express.Router();

router.route("/health").get((req, res) => {
  logger.info("health endpoint called");
  const healthCheck = {
    message: "OK",
    timestamp: Date.now(),
  };
  res.send(healthCheck);
});

export default router;
