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
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url,
        type: 'post'
      },
      message: 'success'
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
