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
    console.log("街道请求 >>>>> " + Date.now(), ctx.query);
    const result = await Country_Comp.find();
    console.log("返回结果 >>>>> ", result)
    ctx.body = {
      code: 200,
      data: result,
      message: 'success'
    }
  }
}