import bcrypt from 'bcrypt'
import repoUser from '../repositories/repository.user.js'


async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await repoUser.Inserir(name, email, hashPassword)

    return user
}

async function Listar() {
            
        const users = await repoUser.Listar()
    
        return users
}


export default { Inserir, Listar }