const { Schema } = require('mongoose');

const fields = {
  name_cn: String, // 中文名
  name_en: String, // 英文名
  release_date: Date, // 发行时间
  country: String,  // 国家
  language: String, // 语言
  imdb_score: Number, // IMDB评分
  storyline: String, // 故事情节
  scores: [],   // 评分
  director: [Schema.Types.ObjectId], // 导演
  writers: [Schema.Types.ObjectId],  // 编剧
  stars: [Schema.Types.ObjectId],    // 主演
  runtime: Number,  // 时长
  resolution: String,  // 分辨率
  size: {
    val: Number,
    unit: {
      type: String,
      default: 'MB'
    }
  }, // 文件体积大小，单位默认MB
  types: [String],  // 类型
  extension: String, // 视屏类型 后缀
  subtitle: String,   // 字幕
  download_url: String // 下载链接
}


const FilmSchema = new Schema(fields);

FilmSchema.virtual('size_full')
  .get(function () {
    return this.size.val + this.size.unit;
  })
  .set(function (v) {
    this.size.val = parseInt(v);
    this.size.unit = v.replace(this.size.val).substr(0, 2);
  })

FilmSchema.index({ name_cn: 1 });
FilmSchema.index({ name_en: 1 });
FilmSchema.index({ release_date: -1 });

module.exports = FilmSchema;
