/**
 * TODO:: 怎么能同步连接MongoDB呢？？？？
 */
const mongoose = require('mongoose');
const conf = require('../config/mongodb.conf.js');


// ES6 Promise
mongoose.Promise = global.Promise;

exports.connectDB = async function () {
  mongoose.connection
    .once('open', function () {
      console.log("连接成功");
    })
    .on('error', function (err) {
      console.error(err)
      process.exit(0);
    });
  await mongoose.connect(conf.url, conf.options);
  const BaseModel = require('./base_model');
  const Schemas = {
    Film: require('./Film'),
    User: require('./User')
    // Article: require('./Article')
  }

  Object.keys(Schemas).forEach(ele => {
    BaseModel(Schemas[ele]);
    module.exports[ele] = mongoose.model(ele, Schemas[ele]);
  });
}
