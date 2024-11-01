import { query } from "../database/conecta.js";

async function Listar(name) {
  const filtro = [];

  let sql = "SELECT * FROM doctors ";

  if (name) {
    sql = sql + "where name like ? ";
    filtro.push("%" + name + "%");
  }
  sql = sql + "order by name";

  const doctors = await query(sql, filtro);

  return doctors;
}

async function Inserir(name, specialty, icon) {
  let sql =
    "INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?) returning id_doctor";
  const doctor = await query(sql, [name, specialty, icon]);

  return doctor[0];
}

async function Editar(id_doctor, name, specialty, icon) {
  let sql =
    "UPDATE doctors SET name = ?, specialty = ?, icon = ? WHERE id_doctor = ?";
  await query(sql, [name, specialty, icon, id_doctor]);

  return { id_doctor };
}

async function Excluir(id_doctor) {
  let sql = "DELETE FROM doctors WHERE id_doctor = ?";
  await query(sql, [id_doctor]);

  return { id_doctor };
}

async function ListarServicos(id_doctor) {
  let sql = `select d.id_service, s.*
from doctors_services d
join services s on (s.id_service = d.id_service)
where d.id_doctor = ? order by s.description`;
  const serv = await query(sql, [id_doctor]);

  return serv;
}

export default { Listar, Inserir, Editar, Excluir, ListarServicos };
