module.exports = async function a(ctx, next) {
  // console.log(ctx.params);
  // console.dir(ctx.request);
  ctx.body = ctx.request;
  // await next();
  console.log("nnbbbb")
}