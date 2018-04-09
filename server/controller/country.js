import {
  Country,
  Country_Comp
} from '../models';

module.exports = {
  async saveCountry(ctx, next) {
    let art = await Country.find({})
    ctx.body = {
      code: 200,
      data: art,
      message: 'success'
    }
  },

  async getCountry(ctx, next) {
    const result = await Country_Comp.find();
    ctx.body = {
      code: 200,
      data: result,
      message: 'success'
    }
  }
}