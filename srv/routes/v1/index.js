import express from "express";
import healthRoute from "./health.route.js";
const router = express.Router();

const defaultRoute = [
  {
    path: "/",
    route: healthRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
