import serviceAppointment from "../service/service.appointment.js";

async function ListarbyUser(req, res) {
  const id_user = req.id_user;
  const appointments = await serviceAppointment.Listar(id_user);
  res.json(appointments);
}

export default { ListarbyUser };
