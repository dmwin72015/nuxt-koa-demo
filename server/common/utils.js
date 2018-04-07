import Busboy from 'busboy';
import fs from 'fs';
import moment from 'moment';
import path from 'path';
import shortid from 'shortid';
import {
  uploadDir
} from '@config/upload.conf.js';

const reqUrl = '/upload/';

// 生成一个随机名字
export const randomFileNam = (oldname) => {
  return moment().format("YYYY-MM-DD") + '-' + shortid.generate() + path.extname(oldname)
}

// 保存上传的文件
export const uploadSaveFile = (ctx) => {
  const req = ctx.req; // node request
  const koaReq = ctx.request; // koa request

  let busboy = new Busboy({
    headers: req.headers,
    limits: {
      fieldNameSize: 20,
      fileSize: 4 * 1024 * 1024
    }
  })
  let _data = {
    name: '',
    url: ''
  };
  let result = {
    code: '200',
    message: 'success'
  };
  return new Promise((resolve, reject) => {
    if (koaReq.type !== 'multipart/form-data') {
      reject(new Error({
        code: '10401',
        data: null,
        message: '请求类型不支持'
      }))
    } else {
      busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        const newName = randomFileNam(filename);
        const savePath = path.join(uploadDir, newName);
        _data.name = newName;
        _data.url = path.join(reqUrl, newName);
        result.data = _data;
        file.pipe(fs.createWriteStream(savePath))
          .on('end', () => {
            resolve(result)
          });
      });
      busboy.on('finish', () => {
        resolve(result);
      });
      busboy.on('error', (err) => {
        reject(Object.assign({}, result, {
          code: '',
          data: null,
          message: err
        }))
      })
      req.pipe(busboy);
    }
  })
}