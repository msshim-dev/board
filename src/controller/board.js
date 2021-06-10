import db from '../db'

const controll = {
  getboard: async () => {
    const { page } = ctx.request.query
    console.log(page)
    return db.getboard(page)
  },
}

export default controll
