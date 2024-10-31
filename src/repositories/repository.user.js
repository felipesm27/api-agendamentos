import { query } from "../database/conecta.js";

async function Inserir(name, email, password) {
  let sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?) returning id_user`;

  const user = await query(sql, [name, email, password]);

  return user[0];
}

async function Listar() {
  let sql = `SELECT * FROM users`;
  const users = query(sql);
  return users;
}

async function ListarByEmail(email) {
  let sql = `select * from users where email = ?`;
  const user = await query(sql, [email]);
  console.log(user);
  if (user.length == 0) return [];
  else return user[0];
}

export default { Inserir, Listar, ListarByEmail };
