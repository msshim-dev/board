import mydb from '../db'

const controll = {
  test: async (ctx) => {
    ctx.body = 12
  },

  post: async (ctx) => {
    const { ppid, pcid, writer, content, password } = ctx.request.body;
    return mydb.postComment(writer, content, ppid, pcid, password)
  }
}

export default controll
