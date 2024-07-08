const { stats, getAggregatedStats } = require("../helpers/getAggregatedStats");
const { validateType } = require("../helpers/validateType");

const getStats = (ctx, next) => {
  const { autoId } = ctx.params;

  const validTypes = ["listing", "phoneNumber", "both"];
  const type = validateType(ctx, validTypes);
  if (!type) return;

  ctx.status = 200;
  ctx.body = getAggregatedStats(autoId, type);
};

const addStats = (ctx, next) => {
  const { autoId } = ctx.params;
  const { type } = ctx.request.body;

  if (!stats[autoId]) {
    stats[autoId] = { listing: 0, phoneNumber: 0 };
  }

  switch (type) {
    case "listing":
      stats[autoId].listing += 1;
      break;
    case "phoneNumber":
      stats[autoId].phoneNumber += 1;
      break;
    default:
      ctx.status = 400;
      ctx.body = { error: "Invalid type" };
      return;
  }

  ctx.status = 201;
  ctx.body = { success: true };
};

module.exports = {
  getStats,
  addStats,
};
