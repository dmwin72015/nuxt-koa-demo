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
    const { request, response } = ctx;
    const query = request.query;
    const page = query.page || 1;

    const total = await CountryComp.count().exec();
    const result = await CountryComp.find();
    ctx.body = {
      code: 200,
      data: {
        total: total,
        list: result
      },
      message: "success"
    };
  }
};
