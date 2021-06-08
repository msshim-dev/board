import Router from 'koa-router'
import controll from '../controller/board'

const router = new Router()

router.get('/', controll.show)

export default router
