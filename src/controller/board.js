import mydb from '../db'

const controll = {
  test: async (ctx) => {
    ctx.body = 1
  },

  post: async (ctx) => {
    const { writer, subject, content, password } = ctx.request.body;
    return mydb.postBoard(writer, subject, content, password)
  }
}

export default controll
