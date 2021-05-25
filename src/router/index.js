import combineRouters from 'koa-combine-routers'
import board from './board'
import comment from './comment'

const router = combineRouters(board, comment)

export default router
