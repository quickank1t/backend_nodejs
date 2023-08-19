import express from "express";
import router from "./routes/v1/index.js";
const app = express();

app.use("/v1", router);

export default app;
