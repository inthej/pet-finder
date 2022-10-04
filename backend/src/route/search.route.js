
module.exports = (app) => {
  const { checkSchema } = require('express-validator')
  const validator = require('../middleware/validator')
  const { AnimalList } = require('./validation/search.schema')
  const SearchController = require("../controller/search.controller")

  app.get('/search/sidoList', SearchController.sidoList)
  app.get('/search/sigunguList', SearchController.sigunguList)
  app.get('/search/shelterList', SearchController.shelterList)
  app.get('/search/kindList', SearchController.kindList)
  app.get('/search/animalList', validator.validate(checkSchema(AnimalList)), SearchController.animalList)
}
