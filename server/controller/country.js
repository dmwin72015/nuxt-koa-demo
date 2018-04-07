import {
  Country
} from '../models';

module.exports = {
  async saveCountry(ctx, next) {
    let art = await Country.find({})
    ctx.body = {
      code: 200,
      data: art,
      message: 'success'
    }
  }
}