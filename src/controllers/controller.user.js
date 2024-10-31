
import serviceUser from '../service/service.user.js';


async function Inserir(req, res) {

    const { name, email, password } = req.body;
    const user = await serviceUser.Inserir(name, email, password);
    res.status(201).json(user);

}

async function Listar(req, res) {

    const users = await serviceUser.Listar();
    res.status(200).json(users);

}



export default { Inserir, Listar };