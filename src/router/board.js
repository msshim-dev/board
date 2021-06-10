import Router from 'koa-router'
import controll from '../controller/board'

const router = new Router()

router.get('/getboard', controll.getboard)

router.post('/insertboard', controll.insert)

export default router
