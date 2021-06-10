import db from '../db'

const controll = {
  getboard: async () => {
    const { page } = ctx.request.query
    console.log(page)
    return db.getboard(page)
  },

  insert: async () => {
    // eslint-disable-next-line object-curly-newline
    const { auth, pw, title, txt } = ctx.request.body
    console.log(auth, pw, title, txt)
    return db.insertboard(auth, pw, title, txt)
  },
}

export default controll
