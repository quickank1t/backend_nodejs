import "dotenv/config";
import Config from "./srv/shared/Config.js";
import app from "./srv/app.js";

app.listen(Config.port);
