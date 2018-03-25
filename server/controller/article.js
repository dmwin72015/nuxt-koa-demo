module.exports = {
  getArticle(ctx, next) {
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url
      },
      message: 'success'
    }
  },
  saveArticle(ctx, next) {
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url
      },
      message: 'success'
    }
  },

  delArticle(ctx, next) {
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url
      },
      message: 'success'
    }
  }
}
