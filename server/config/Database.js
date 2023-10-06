const mysql = require("mysql")

const db = mysql.createConnection({
  host:process.env.HOST || 'linnxw.my.id',
  user:process.env.USER || 'linnxwmy_penjualan',
  password:process.env.PASSWORD || 'linnxw230606060623',
  database:process.env.DATABASE || 'linnxwmy_penjualan'
})

module.exports =  db