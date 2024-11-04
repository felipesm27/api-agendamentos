import { query } from "../database/conecta.js";

async function Listar(id_user) {
  let filtro = [];

  let sql = `select a.id_appointment, s.description as service,
       d.name as doctor, d.specialty,
       a.booking_date, a.booking_hour, u.name as user, ds.price
from appointments a
join services s on (s.id_service = a.id_service)
join doctors d on (d.id_doctor = a.id_doctor)
join users u on (u.id_user = a.id_user)
join doctors_services ds on (ds.id_doctor = a.id_doctor and
                             ds.id_service = a.id_service)
where a.id_user = ?
order by a.booking_date, a.booking_hour`;

  const appointments = await query(sql, [id_user]);

  return appointments;
}

export default { Listar };
