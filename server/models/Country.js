const {
  Schema
} = require('mongoose');

const fields = {
  id: {
    type: Number
  },
  country_id: {
    type: Number
  },
  // code 编号
  country_code: {
    type: String
  },
  // 中文名
  name_cn: {
    type: String,
    required: [true, '中文名字为必填项']
  },
  // 英文名
  name_en: {
    type: String,
    required: [true, '中文名字为必填项']
  },
  // 语言
  languages: [],
  // 面积
  area: Number
//
}

const CountrySchema = new Schema(fields);

CountrySchema.index({
  name_cn: 1
});
CountrySchema.index({
  name_en: 1
});
CountrySchema.index({
  release_date: -1
});

module.exports = CountrySchema;
