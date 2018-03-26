import { getArticle, saveArticle, delArticle } from '@controller/article';

module.exports = [{
  url: "/:id",
  method: {
    get: getArticle,
    post: saveArticle,
    delete: delArticle
  }
}]

