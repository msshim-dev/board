import Router from 'koa-router'
import controll from '../controller/comment'

const router = new Router()

router.get('/comment', controll.getcomment)

export default router
