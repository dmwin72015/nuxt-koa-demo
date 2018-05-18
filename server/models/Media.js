const { Schema } = require("mongoose");

const sizeEnum = ["KB", "MB", "GB", "TB", "PB"];
const fields = {
  // 中文名
  public_id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "名字为必填项"]
  },
  // 地址
  url: {
    type: String,
    required: [true, "地址为必填项"]
  },
  version: String,
  width: Number,
  height: Number,
  size: Number,
  format: String,
  // 发行时间
  modify_at: {
    type: Date,
    default: Date.now
  }
};

const MediaSchema = new Schema(fields);

FilmSchema.index({
  public_id: 1
});
FilmSchema.index({
  name: 1
});
FilmSchema.index({
  modify_at: -1
});

module.exports = MediaSchema;
