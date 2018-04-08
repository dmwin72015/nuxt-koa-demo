import {
  getCountry
} from '@controller/country';

module.exports = [{
  url: "/:id",
  method: {
    get: getCountry
  }
}, {
  url: '/',
  method: {
    get: getCountry
  }
}]