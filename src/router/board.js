import Router from 'koa-router'
import controll from '../controller/board'

const router = new Router()

router.get('/all', controll.all)

export default router
