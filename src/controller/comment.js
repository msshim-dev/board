import mydb from '../db'

const controll = {
  post: async (ctx) => {
    const { ppid, pcid, writer, content, password } = ctx.request.body;
    return mydb.postComment(writer, content, ppid, pcid, password)
  },

  update: async (ctx) => {
    const { id, content, password } = ctx.request.body;
    return mydb.updateComment(id, content, password)
  },

  get: async (ctx) => {
    let pid = ctx.query.pid
    return mydb.getComment(pid)
  }
}

export default controll
