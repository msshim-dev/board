import Router from 'koa-router'
import controll from '../controller/board'

const router = new Router()

router.get('/', controll.test)

export default router
