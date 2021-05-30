import Router from 'koa-router'
import controll from '../controller/board'

const router = new Router()

//router.get('/', controll.test)
router.post('/post', controll.post)

export default router
