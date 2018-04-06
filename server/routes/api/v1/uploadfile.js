import {
  uploadSaveFile
} from '@/common/utils.js'

module.exports = {
  'post': async (ctx, next) => {
    ctx.body = await uploadSaveFile(ctx);
  }
}