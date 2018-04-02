import {
  getFilm,
  saveFilm,
  delFilm
} from '@controller/film';

module.exports = [{
  url: "/:id",
  method: {
    get: getFilm,
    delete: delFilm
  }
}, {
  url: '/',
  method: {
    post: saveFilm
  }
}]
