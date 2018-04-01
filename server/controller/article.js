const article = require('../models/');
module.exports = {
  async getArticle(ctx, next) {
    let art = await article.find({})
    ctx.body = {
      code: 200,
      data: art,
      message: 'success'
    }
  },
  async saveArticle(ctx, next) {
    let art = await article.find({})
    ctx.body = {
      code: 200,
      data: art,
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
