const controll = {
  show: async (ctx) => {
    const { idx } = ctx.request.query

    ctx.body = idx
    /* 해당 인덱스 포스트의 댓글 전부 긁어오기 */
    console.log('comment_) ')
    console.log(idx)
  },
}

export default controll
