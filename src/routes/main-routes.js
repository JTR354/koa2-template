import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/test/get-test-data', controllers.test.getTestData)

module.exports = router
