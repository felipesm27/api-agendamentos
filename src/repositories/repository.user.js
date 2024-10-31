import {  query } from '../database/conecta.js';

async function Inserir(name, email, password) {
     let sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?) returning id_user`

     const user = await query(sql, [name, email, password])

     return user[0]
}

async function Listar() {     
    let sql = `SELECT * FROM users`
    const users = query(sql)
    return users
     }

export default { Inserir, Listar }
