const { validateType } = require("./validateType");

const validateStatsRequest = (ctx, next) => {
  const validTypes = ["listing", "phoneNumber"];
  const type = validateType(ctx, validTypes);

  if (!type) return;

  return next();
};

module.exports = {
  validateStatsRequest,
};
