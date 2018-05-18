//
const crypto = require('crypto');
const request = require('request');

// config
const Bucket = 'marou-1252074364';
const Region = 'ap-beijing';
const SecretKey = 'B7nFanskOo33wmXEm575wjTzINMtJdqz';
const SecretId = 'AKIDWqwpTs20iBQP9dsqhJgpjOo1zjFXtNvD';
const config = {
  // Url: 'https://sts.api.qcloud.com/v2/index.php',
  Url: 'https://marou-1252074364.cosbj.myqcloud.com',
  // Domain: 'sts.api.qcloud.com',
  // Proxy: '',
  SecretId, // 固定密钥
  SecretKey, // 固定密钥
  Bucket,
  Region,
  AllowPrefix: '_ALLOW_DIR_/*' // 这里改成允许的路径前缀，这里可以根据自己网站的用户登录态判断允许上传的目录，例子：* 或者 a/* 或者 a.jpg
};

const util = {
  // 获取随机数
  getRandom: function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  },
  // obj 转 query string
  json2str: function (obj) {
    var arr = [];
    Object.keys(obj).sort().forEach(function (item) {
      var val = obj[item] || '';
      arr.push(item + '=' + val);
    });
    return arr.join('&');
  },
  // 计算签名
  getSignature: function (opt, key, method) {
    var formatString = method + config.Domain + '/v2/index.php?' + util.json2str(opt);
    var hmac = crypto.createHmac('sha1', key);
    var sign = hmac.update(Buffer.from(formatString, 'utf8')).digest('base64');
    return sign;
  }
};

// 拼接获取临时密钥的参数
var getTempKeys = function (callback) {
  // 判断是否修改了 AllowPrefix
  if (config.AllowPrefix === '_ALLOW_DIR_/*') {
    callback({
      'error': '请修改 AllowPrefix 配置项，指定允许上传的路径前缀'
    });
    return;
  }

  // 定义绑定临时密钥的权限策略
  var ShortBucketName = config.Bucket.substr(0, config.Bucket.lastIndexOf('-'));
  var AppId = config.Bucket.substr(1 + config.Bucket.lastIndexOf('-'));
  var policy = {
    'version': '2.0',
    'statement': [{
      'action': [
        // 这里可以从临时密钥的权限上控制前端允许的操作
        // 'name/cos:*', // 这样写可以包含下面所有权限

        // // 列出所有允许的操作
        // // ACL 读写
        // 'name/cos:GetBucketACL',
        // 'name/cos:PutBucketACL',
        // 'name/cos:GetObjectACL',
        // 'name/cos:PutObjectACL',
        // // 简单 Bucket 操作
        // 'name/cos:PutBucket',
        // 'name/cos:HeadBucket',
        // 'name/cos:GetBucket',
        // 'name/cos:DeleteBucket',
        // 'name/cos:GetBucketLocation',
        // // Versioning
        // 'name/cos:PutBucketVersioning',
        // 'name/cos:GetBucketVersioning',
        // // CORS
        // 'name/cos:PutBucketCORS',
        // 'name/cos:GetBucketCORS',
        // 'name/cos:DeleteBucketCORS',
        // // Lifecycle
        // 'name/cos:PutBucketLifecycle',
        // 'name/cos:GetBucketLifecycle',
        // 'name/cos:DeleteBucketLifecycle',
        // // Replication
        // 'name/cos:PutBucketReplication',
        // 'name/cos:GetBucketReplication',
        // 'name/cos:DeleteBucketReplication',
        // // 删除文件
        // 'name/cos:DeleteMultipleObject',
        // 'name/cos:DeleteObject',
        // 简单文件操作
        'name/cos:PutObject',
        'name/cos:PostObject',
        'name/cos:AppendObject',
        'name/cos:GetObject',
        'name/cos:HeadObject',
        'name/cos:OptionsObject',
        'name/cos:PutObjectCopy',
        'name/cos:PostObjectRestore',
        // 分片上传操作
        'name/cos:InitiateMultipartUpload',
        'name/cos:ListMultipartUploads',
        'name/cos:ListParts',
        'name/cos:UploadPart',
        'name/cos:CompleteMultipartUpload',
        'name/cos:AbortMultipartUpload'
      ],
      'effect': 'allow',
      'principal': {
        'qcs': ['*']
      },
      'resource': [
        'qcs::cos:' + config.Region + ':uid/' + AppId + ':prefix//' + AppId + '/' + ShortBucketName + '/',
        'qcs::cos:' + config.Region + ':uid/' + AppId + ':prefix//' + AppId + '/' + ShortBucketName + '/' + config.AllowPrefix
      ]
    }]
  };

  var policyStr = JSON.stringify(policy);

  var Action = 'GetFederationToken';
  var Nonce = util.getRandom(10000, 20000);
  var Timestamp = parseInt(+new Date() / 1000);
  var Method = 'GET';

  var params = {
    Action: Action,
    Nonce: Nonce,
    Region: '',
    SecretId: config.SecretId,
    Timestamp: Timestamp,
    durationSeconds: 7200,
    name: '',
    policy: policyStr
  };
  params.Signature = encodeURIComponent(util.getSignature(params, config.SecretKey, Method));

  var opt = {
    method: Method,
    url: config.Url + '?' + util.json2str(params),
    rejectUnauthorized: false,
    headers: {
      Host: config.Domain
    },
    proxy: config.Proxy || ''
  };
  request(opt, function (err, response, body) {
    body = body && JSON.parse(body);
    if (body.data) body = body.data;
    callback(err, body);
  });
};


module.exports = getTempKeys
