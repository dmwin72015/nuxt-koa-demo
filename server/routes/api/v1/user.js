import {
  getArticle,
  saveArticle,
  delArticle
} from '@controller/article';

module.exports = [{
  url: "/:id",
  method: {
    get: getArticle,
    delete: delArticle
  }
}, {
  url: '/',
  method: {
    post: saveArticle
  }
}]
