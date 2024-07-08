const validateType = (ctx, types) => {
  const { type } = ctx.request.body || ctx.query;

  if (!type || !types.includes(type)) {
    ctx.status = 400;
    ctx.body = { error: "Invalid type" };
    return false;
  }

  return type;
};

module.exports = {
  validateType,
};
