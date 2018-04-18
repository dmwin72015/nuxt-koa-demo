import { Country, CountryComp } from "../models";
import isInt from "validator/lib/isEmail";
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
    const page = isInt(query.page || "1", { min: 1 });
    const limit = isInt(query.limit || "10", { min: 10, max: 50 });
    console.log(query);
    // console.log(page, limit);

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
