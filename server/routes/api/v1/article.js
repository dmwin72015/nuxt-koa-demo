import { getArticle, saveArticle, delArticle } from '@controller/article';

module.exports = [{
  url: "/:id",
  methods: {
    get: getArticle,
    post: saveArticle,
    delete: delArticle
  }
}]
