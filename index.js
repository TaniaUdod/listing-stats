const Koa = require("koa");

const statsRouter = require("./routes/statsRouter");

const app = new Koa();

app.use(statsRouter.routes()).use(statsRouter.allowedMethods());

app.use((ctx) => {
  ctx.status = 404;
  ctx.body = { message: "Route not found" };
});

app.on("error", (err, ctx) => {
  console.error("Server error", err);
  ctx.status = err.status || 500;
  ctx.body = { message: err.message || "Server error" };
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
