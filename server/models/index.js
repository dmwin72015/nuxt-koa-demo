const mongoose = require('mongoose');

const conf = require('../config/mongodb.conf.js');

mongoose.connect(conf.url, conf.options)
  .then(() => {
    console.log('connect mongdb success.....');
  }).catch(err => {
    console.error('connect to %s error', conf.url, err.message)
  });
