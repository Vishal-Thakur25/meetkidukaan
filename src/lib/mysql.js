// lib/mysql.js
import mysql from "mysql2/promise";

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT = "3306",
} = process.env;

let pool;
if (!global.__mysqlPool) {
  global.__mysqlPool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: Number(DB_PORT),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: "utf8mb4",
  });
}
pool = global.__mysqlPool;

export default pool;
