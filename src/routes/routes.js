import { Router } from "express";
import controllerDoctor from "../controllers/controller.doctor.js";
import controllerUser from "../controllers/controller.user.js";
import controllerAppointment from "../controllers/controller.appoitment.js";
import jwt from "../token.js";

const router = Router();

// Doctors
router.get("/doctors", jwt.ValidateToken, controllerDoctor.Listar);
router.post("/doctors", jwt.ValidateToken, controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Editar);
router.delete(
  "/doctors/:id_doctor",
  jwt.ValidateToken,
  controllerDoctor.Excluir
);

router.get(
  "/doctors/:id_doctor/services",
  jwt.ValidateToken,
  controllerDoctor.ListarServicos
);

// Users
router.post("/users/login", controllerUser.Login);
router.post("/users/register", controllerUser.Inserir);
router.get("/users", controllerUser.Listar);
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile);

// Appointments

router.get(
  "/appointments",
  jwt.ValidateToken,
  controllerAppointment.ListarbyUser
);

router.post("/appointments", jwt.ValidateToken, controllerAppointment.Inserir);

export default router;
