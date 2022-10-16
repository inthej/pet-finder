
module.exports = (app) => {
  const { checkSchema } = require('express-validator')
  const validator = require('../middleware/validator')
  const { Animals } = require('./validation/search.schema')
  const SearchController = require("../controllers/search.controller")

  app.get('/search/sido', SearchController.sido)
  app.get('/search/sigungu', SearchController.sigungu)
  app.get('/search/shelter', SearchController.shelter)
  app.get('/search/kind', SearchController.kind)
  app.get('/search/animals', validator.validate(checkSchema(Animals)), SearchController.animals)
}
