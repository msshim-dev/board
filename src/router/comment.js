import Router from 'koa-router'
import controll from '../controller/comment'

const router = new Router()

//router.get('/test', controll.test)
router.post('/postcomment', controll.post)

export default router
