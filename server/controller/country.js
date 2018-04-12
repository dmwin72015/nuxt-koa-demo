import { Country, CountryComp } from "../models";

module.exports = {
  async saveCountry(ctx, next) {
    let art = await Country.find({});
    ctx.body = {
      code: 200,
      data: art,
      message: "success"
    };
  },

  async getCountry(ctx, next) {
    const result = await CountryComp.find();
    ctx.body = {
      code: 200,
      data: result,
      message: "success"
    };
  }
};
