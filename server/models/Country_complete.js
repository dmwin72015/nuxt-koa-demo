/**
 * Created by mjj on 2018/4/7.
 */
const { Schema } = require("mongoose");

const fields = {
  id: {
    type: Number
  },
  // 原本name
  native_name: {
    type: String
  },
  // 中文名字
  cn_name: {
    type: String
  },
  // code 编号
  country_code: {
    type: String
  },
  info: Schema.Types.Mixed
};

const CountrycompSchema = new Schema(fields);

CountrycompSchema.index({
  country_name: 1
});
CountrycompSchema.index({
  country_code: 1
});

module.exports = CountrycompSchema;
