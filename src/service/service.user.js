import bcrypt from "bcrypt";
import repoUser from "../repositories/repository.user.js";
import jwt from "../token.js";

async function Inserir(name, email, password) {
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await repoUser.Inserir(name, email, hashPassword);

  user.token = jwt.CreateToken(user.id_user);

  return user;
}

async function Listar() {
  const users = await repoUser.Listar();
  // Mapeando cada usuário para um novo objeto contendo apenas os campos desejados
  const filteredUsers = users.map(({ id_user, name, email }) => ({
    id_user,
    name,
    email,
  }));

  return filteredUsers;
}

async function Login(email, password) {
  const user = await repoUser.ListarByEmail(email);

  if (user.length == 0) return [];
  else {
    if (await bcrypt.compare(password, user.password)) {
      delete user.password;

      user.token = jwt.CreateToken(user.id_user);

      return user;
    } else return [];
  }

  return user;
}

export default { Inserir, Listar, Login };
