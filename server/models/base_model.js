/**
 *  所有 model 通用扩展
 *	
 */

module.exports = function(schema) {
  schema.pre('save', (next) => {
    this.lastModify_ts = new Date();
    next();
  })
}
