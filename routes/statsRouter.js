const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const { addStats, getStats } = require("../controllers/statsController");
const { validateStatsRequest } = require("../helpers/statsValidation");

const statsRouter = new Router({
  prefix: "/stats",
});

statsRouter.get("/:autoId", getStats);
statsRouter.post("/:autoId", bodyParser(), validateStatsRequest, addStats);

module.exports = statsRouter;
