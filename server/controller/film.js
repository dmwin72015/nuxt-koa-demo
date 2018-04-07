import {
  Film
} from '../models';

console.log("【mongoose-model】 >>>> film.js >>> line:3", Film)

module.exports = {
  async getFilm(ctx, next) {
    let art = await Film.find({})
    ctx.body = {
      code: 200,
      data: art,
      message: 'success'
    }
  },
  async saveFilm(ctx, next) {
    let film = new Film();
    let data = ctx.request.body;
    film.name = data.name;

    ctx.body = {
      code: 200,
      data: film,
      message: 'success',
      ip: ctx.ip
    }
  },

  async delFilm(ctx, next) {
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