module.exports = {
  async getArticle(ctx, next) {
    console.log("aaaa")
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url,
        type: 'get'
      },
      message: 'success'
    }
  },
  async saveArticle(ctx, next) {
    console.log(ctx.request.body)
    ctx.body = {
      code: 200,
      data: ctx.request.body,
      message: 'success',
      ip: ctx.ip
    }
  },

  async delArticle(ctx, next) {
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url,
        type: 'delete'
      },
      message: 'success'
    }
  }
}
