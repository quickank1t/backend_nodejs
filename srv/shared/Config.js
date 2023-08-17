import dotenv from "dotenv";

class Config {
  constructor() {
    dotenv.config();
  }

  get logLevel() {
    if (process.env.LOG_LEVEL) return process.env.LOG_LEVEL;
    return "INFO";
  }
}

export default new Config();
