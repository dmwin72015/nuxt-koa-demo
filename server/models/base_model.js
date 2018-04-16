/**
 *  所有 model 通用扩展，保存最后更新时间
 */

module.exports = function(schema) {
  schema.pre("save", next => {
    this.modify_at = new Date();
    next();
  });
};
