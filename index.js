import "dotenv/config";
import Config from "./srv/shared/Config.js";
import logger from "./srv/shared/LogUtils.js";
import app from "./srv/app.js";

app.listen(Config.port, () => {
  logger.info(`App listening on port ${Config.port}!`);
});
