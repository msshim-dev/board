import Koa from 'koa'
import logger from 'koa-logger'
import koaBody from 'koa-body'
import router from './router'

const app = new Koa()
app.use(koaBody({ multipart: true }))

app.use(logger())
app.use(router())

app.listen(9000, () => console.log('##server started http://localhost:9000'))

export default app
