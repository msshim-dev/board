import Router from 'koa-router'
import controll from '../controller/comment'

const router = new Router()

router.get('/test', controll.test)

export default router
