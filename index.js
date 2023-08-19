import "dotenv/config";
import Config from "./server/shared/Config.js";
import logger from "./server/shared/LogUtils.js";
import app from "./server/app.js";

app.listen(Config.port, () => {
  logger.info(`App listening on port ${Config.port}!`);
});
