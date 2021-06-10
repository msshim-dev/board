import Mysql from './helper'

const mysql = new Mysql()

const func = {
  getcomment: async (ctx) => {
    const { idx } = ctx.request.query
    ctx.body = idx
    console.log('db getcomment ')
    console.log(idx)
    // eslint-disable-next-line no-return-await
    return await mysql.query(`select*from comment where comment.parentidx = ${idx}`)
      .then((rows) => {
        console.log(rows)
        return rows
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  },

  getboard: async (ctx) => {
    const { pageidx } = ctx.request.query
    ctx.body = pageidx
    console.log('db getcomment ')
    console.log(pageidx)
    // eslint-disable-next-line no-return-await
    return await mysql.query(`select*from post order by date_ DESC LIMIT ${pageidx}, 20`)
      .then((rows) => {
        console.log(rows)
        return rows
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  },
}

export default func
