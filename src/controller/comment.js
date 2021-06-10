import db from '../db'

const controll = {
  getcomment: async (ctx) => {
    const { idx } = ctx.request.query

    ctx.body = idx
    /* 해당 인덱스 포스트의 댓글 전부 긁어오기 */
    console.log('comment_) ')
    console.log(idx)

    return db.getcomment(idx)
  },

  insertcomment: async (ctx) => {
    const { parentidx, commentidx, txt } = ctx.request.body
    return db.getcomment(parentidx, commentidx, txt)
  },
}

export default controll
