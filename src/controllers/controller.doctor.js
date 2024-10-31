import serviceDoctor from "../service/service.doctor.js";

async function Listar(req, res) {
    const name = req.query.name;
    const doctors = await serviceDoctor.Listar(name);
    res.json(doctors);

}

async function Inserir(req, res) {

    const { name, specialty, icon } = req.body;
    const doctor = await serviceDoctor.Inserir(name, specialty, icon);
    res.status(201).json(doctor);

}

async function Editar(req, res) {
    const id_doctor = req.params.id_doctor;
    const { name, specialty, icon } = req.body;

    const doctor = await serviceDoctor.Editar(id_doctor, name, specialty, icon);
    
    res.status(200).json(doctor);
}

async function Excluir(req, res) {
    const id_doctor = req.params.id_doctor;
    await serviceDoctor.Excluir(id_doctor);
    res.status(204).end();
}

export default { Listar, Inserir, Editar, Excluir };