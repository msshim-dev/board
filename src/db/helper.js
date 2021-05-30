import mysql from 'mysql2/promise'

const connections = {
  host: 'db',
  port: 3306,
  user: 'user',
  password: '1111',
  database: 'board',
  multipleStatements: true,
}

class Mysql {
  constructor() {
    this.pool = mysql.createPool(connections)
  }

  async query(qry) {
    const conn = await this.pool.getConnection()
    console.log(qry)
    try {
      this.qry = qry
      const [rows] = await conn.query(this.qry)
      return rows
    } finally {
      conn.release()
    }
  }
}

export default Mysql
