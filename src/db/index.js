import Mysql from './helper'

const mysql = new Mysql()

const func = {
  getcomment: async (idx) => {
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

  getboard: async (idx) => {
    ctx.body = idx
    console.log('db getboard ')
    console.log(idx)
    // eslint-disable-next-line no-return-await
    return await mysql.query(`select*from post order by date_ DESC LIMIT ${idx}, 20`)
      .then((rows) => {
        console.log(rows)
        return rows
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  },

  insertboard: async (auth, pw, title, txt) => {
    console.log('db insertboard ')
    console.log(auth)
    // eslint-disable-next-line no-return-await
    return await mysql.query(`INSERT INTO post(auth, pw, title,txt,date_) VALUES('${auth}', '${pw}', '${title}','${txt}',NOW())`)
      .then((rows) => {
        console.log(rows)
        return rows
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  },

  insertComment: async (parentidx, commentidx, txt) => {
    console.log('db insertComment ')
    console.log(parentidx)
    // eslint-disable-next-line no-return-await
    return await mysql.query(`INSERT INTO comment (parentidx, commentidx,txt, date_) VALUES (${parentidx}, ${commentidx}, ${txt}, NOW())`)
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
