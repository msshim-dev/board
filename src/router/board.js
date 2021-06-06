import Router from 'koa-router'
import controll from '../controller/board'

const router = new Router()

//router.get('/', controll.test)
router.post('/post', controll.post)
router.put('/update', controll.update)
router.get('/get', controll.get)

export default router
