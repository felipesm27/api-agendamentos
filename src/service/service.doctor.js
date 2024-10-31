import repoDoctor from "../repositories/repository.doctor.js"

async function Listar(name) {
 
    return repoDoctor.Listar(name)

}

async function Inserir(name, specialty, icon) {
   
    const doctor = await repoDoctor.Inserir(name, specialty, icon)

    return doctor
    

}

async function Editar(id_doctor, name, specialty, icon) {
    const doctor = repoDoctor.Editar(id_doctor, name, specialty, icon)

    return doctor
}

async function Excluir(id_doctor) {
    return repoDoctor.Excluir(id_doctor)
}


export default { Listar, Inserir, Editar, Excluir }