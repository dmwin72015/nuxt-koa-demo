import { getCountry } from "@controller/country";
import valid from "@validator/valid_getCountry.js";
module.exports = [
  {
    url: "/:id",
    method: {
      get: getCountry
    }
  },
  {
    url: "/",
    method: {
      get: [valid, getCountry]
    }
  }
];
