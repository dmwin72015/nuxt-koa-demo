const {
  connectDB,
  Country,
  Country_Comp
} = require('../server/models/');

const request = require('request');
const fs = require('fs');
const superagent = require('superagent');
const zlib = require('zlib');
const brotli = require('brotli');

// const {decompressStream, compressStream} = require('iltorb');

/* eslint camelcase: 0 */
const base_url = 'https://restcountries.eu/rest/v2';
const options = {
  baseUrl: base_url,
  encoding: null,
  // gzip: true,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3386.1 Safari/537.36',
    'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8,fr;q=0.7',
    // 'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cache-Control': 'max-age=0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Pragma': 'no-cache',
    'Connection': 'Keep-Alive',
    'Referer': 'https://restcountries.eu',
    'cookie': '__cfduid=defc0620e4a2db00b43915d366f6846911523067320'
  },
  time: true
  // json: true
};
const reqIns = request.defaults(options);
const apis = {
  all: 'all', // 所有国家信息
  name: 'name' // 根据name获取
};

// 开启request debug模式
// request.debug = true;


// superagent 抓取
function getCountryData_2() {
  const url = base_url + '/' + apis.all;
  // .pipe(fs.createWriteStream('./tools/countrys.json'))
  superagent.get(url).end((err, resp) => {
    if (err) {
      throw err
    }
    console.log(resp.headers)
  })
}

// test unzip
function testUzip() {
  const filepath = '/Users/mjj/Downloads/test.txt';
  const bytesRead = 500;
  const decompressStream = zlib.createGunzip();
  decompressStream.on('data', function (chunk) {
    // parseHeader(chunk);
    decompressStream.pause();
  }).on('error', function (err) {
    // handleGunzipError(err, file, chunk);
    throw err;
  });

  fs.createReadStream(filepath, {
    start: 0,
    end: bytesRead,
    chunkSize: bytesRead + 1
  }).on('data', function (chunk) {
    decompressStream.write(chunk);
  });
}

// 抓取国家数据
function getCountryData(name) {
  let url = apis.all;
  if (name) {
    url = apis.name + '/' + name
  }
  return new Promise((resolve, reject) => {
    reqIns.get(url, (err, resp, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(resp);
      }
    });
    //   .on('data', (trunk) => {
    //   arr.push(decodeData(trunk))
    // }).on('end', () => {
    //   console.log(arguments)
    //   resolve(arr)
    // }).on('error', (err) => {
    // reject(err);
    // })
  })
  // let _steam = decompressStream();
  // let arr = [];
  // reqIns.get(url).pipe(_steam);
  // _steam.on('data', (data) => {
  //   console.log(data)
  // }).on('end', () => {
  //
  // })
  function decodeData() {

  }
}

// 获取数据
// TODO:这里有个问题,使用map方法,返回的还是个Uint8Array,即使使用了String.fromCharCode, 还是被转换掉.和普通Array还是有且别的.
async function req() {
  const result = await getCountryData();
  await connectDB();
  let data = brotli.decompress(result.body);
  let source = [];
  data.forEach(e => {
    source.push(String.fromCharCode(e))
  });
  let countrys = null;
  try {
    countrys = JSON.parse(source.join(''))
  } catch (e) {
    console.error("JSON解析转换错误")
    throw e
  }
  if (countrys) {
    saveCountrys(countrys)
  }
}

// 数据入库
function saveCountrys(data) {
  let errCountryList = [];
  data.forEach(ele => {
    let _country = new Country_Comp({
      id: ele.numericCode,
      native_name: ele.name,
      cn_name: '',
      country_code: ele.numericCode,
      info: ele
    });
    errCountryList.push(_country.save())
  });
  Promise.all(errCountryList).then(result => {
    console.log("line:149 >>>>> 入库成功 ", result.length)
  }).catch(err => {
    console.error("line:151 >>>>>>> 数据入库失败 ");
    throw err
  })
}

req();
