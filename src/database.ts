import mysql from "mysql";
import keys from "./keys";

const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
  if (!err) {
    connection.release();
    console.log("Base de Datos conectada");
  } else {
    console.log(err);
  }
});

export default pool;
