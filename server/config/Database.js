import mysql from "mysql"

const db = mysql.createConnection({
  host:process.env.HOST || 'localhost',
  user:process.env.USER || 'root',
  password:process.env.PASSWORD || 'root',
  database:process.env.DATABASE || 'penjualan'
})

export default db