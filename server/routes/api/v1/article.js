import { getArticle, saveArticle, delArticle } from '@controller/article';

console.log(getArticle)

module.exports = [{
  url: "/:id",
  methods: {
    get: getArticle,
    post: saveArticle,
    delete: delArticle
  }
}]
