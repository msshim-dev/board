import mydb from '../db'

const controll = {
  post: async (ctx) => {
    const { writer, subject, content, password } = ctx.request.body
    return mydb.postBoard(writer, subject, content, password)
  },

  update: async (ctx) => {
    const { id, subject, content, password } = ctx.request.body
    return mydb.updateBoard(id, subject, content, password)
  },

  get: async (ctx) => {
    let page = ctx.query.page
    return mydb.getBoard(page)
  }
}

export default controll
