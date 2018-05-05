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

    console.log(page, limit);

    let total = CountryComp.count();
    let list = CountryComp.find({}, null, {
      sort: "name_en",
      skip: (page - 1) * limit,
      limit: limit
    });
    let _body = {
      code: "500",
      data: null,
      message: ""
    };
    let result = await Promise.all([total, list]);
    ctx.body = {
      code: 200,
      data: {
        total: result[0],
        list: result[1]
      },
      message: "success"
    };
    // .then(result => {
    //   console.log(result);
    //   ctx.body = {
    //     code: 200,
    //     data: {
    //       total: result[0],
    //       list: result[1]
    //     },
    //     message: "success"
    //   };
    // })
    // .catch(err => {
    //   _body.data = err;
    //   _body.data = err.message;
    //   ctx.body = _body;
    // });
  }
};
