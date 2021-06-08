import db from '../db'

const controll = {
  show: async (ctx) => {
    const { idx } = ctx.request.query

    console.log(idx)
    console.log(db)
  },
}

export default controll
