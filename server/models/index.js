/**
 * TODO:: 怎么能同步连接MongoDB呢？？？？
 */
const mongoose = require("mongoose");
const conf = require("../config/mongodb.conf.js");

// ES6 Promise
mongoose.Promise = global.Promise;

// const connectDB = () => {
//   return new Promise(() => {

//   })
// }
exports.connectDB = async () => {
  mongoose.connection
    .once("open", () => {
      console.log("连接成功");
    })
    .on("error", err => {
      console.error(err);
      process.exit(0);
    });
  await mongoose.connect(conf.url, conf.options);
  console.info("数据库已经连接成功......");
};

const BaseModel = require("./base_model");
const Schemas = {
  Film: require("./Film"),
  User: require("./User"),
  Country: require("./Country"),
  CountryComp: require("./Country_complete"),
  Media: require('./Media')
  // Article: require('./Article')
};

Object.keys(Schemas).forEach(ele => {
  // 添加通用pre
  // BaseModel(Schemas[ele]);
  exports[ele] = mongoose.model(ele, Schemas[ele]);
});
