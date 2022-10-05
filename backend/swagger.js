const swaggerAutogen = require('swagger-autogen')({ language: 'ko' })
require('dotenv').config()

const outputFile = './swagger_output.json'
const endpointsFiles = [
  './src/routes/search.route.js',
]

const doc = {
  info: {
    version: '0.0.1',
    title: 'PetFinder API',
    description: '',
  },
  host:
    process.env.NODE_ENV !== 'development'
      ? process.env.HOST
      : process.env.HOST + ':' + process.env.PORT,
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Search',
      description: '유기동물 공공데이터'
    }
  ],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    },
  },
  security: [{ bearerAuth: [] }],
}

swaggerAutogen(outputFile, endpointsFiles, doc);