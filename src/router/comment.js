import Router from 'koa-router'
import controll from '../controller/comment'

const router = new Router()

router.post('/postcomment', controll.post)
router.put('/updatecomment', controll.update)
router.get('/getcomment', controll.get)

export default router
