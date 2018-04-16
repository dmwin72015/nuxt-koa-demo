const { Schema } = require("mongoose");

const sizeEnum = ["KB", "MB", "GB", "TB", "PB"];
const fields = {
  // 中文名
  name_cn: {
    type: String,
    required: [true, "中文名字为必填项"]
  },
  // 英文名
  name_en: {
    type: String
  },
  // 发行时间
  release_date: {
    type: Date
  },
  // 国家
  country: {
    type: String
  },
  // 语言
  language: {
    type: String
  },
  // IMDB评分
  imdb_score: {
    type: Number,
    min: [0, "评分不能小于0"],
    max: [10, "评分不能大于10"]
  },
  // 故事情节
  storyline: {
    type: String
  },
  scores: [], // 评分
  director: [Schema.Types.ObjectId], // 导演
  writers: [Schema.Types.ObjectId], // 编剧
  stars: [Schema.Types.ObjectId], // 主演
  // 时长
  runtime: {
    type: String
  },
  // 分辨率
  resolution: {
    type: String
  },
  // 文件体积大小，单位默认MB
  size: {
    val: Number,
    unit: {
      type: String,
      enum: sizeEnum,
      default: "MB"
    }
  },
  types: [String], // 类型
  extension: String, // 视屏类型 后缀
  subtitle: String, // 字幕
  download_url: {
    type: String
  }, // 下载链接
  modify_at: {
    type: Date,
    default: Date.now
  }
};

const FilmSchema = new Schema(fields);

FilmSchema.virtual("size_full")
  .get(function() {
    return this.size.val + this.size.unit;
  })
  .set(function(v) {
    this.size.val = parseInt(v);
    this.size.unit = v.replace(this.size.val).substr(0, 2);
  });

FilmSchema.index({
  name_cn: 1
});
FilmSchema.index({
  name_en: 1
});
FilmSchema.index({
  release_date: -1
});

module.exports = FilmSchema;
