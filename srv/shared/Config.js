import dotenv from "dotenv";
import config from "./Config.js";

class Config {
  constructor() {
    dotenv.config();
  }

  get databaseUrl() {
    return process.env.DATABASE_URL;
  }

  get logLevel() {
    if (process.env.LOG_LEVEL) return process.env.LOG_LEVEL;
    return "INFO";
  }
}

export default new Config();
