import { Router } from 'express';
import { pacienteController } from '../controller/Paciente/PacienteController.js';
export const pacienteRouter = Router();

//tabela paciente
pacienteRouter.get('/pacientes', pacienteController.getTodosOsPacientes);

pacienteRouter.get("/paciente/:id", pacienteController.getPacientePorId);

pacienteRouter.post("/pacientes", pacienteController.criarPaciente);

pacienteRouter.put("/paciente/:id", pacienteController.atualizarPaciente);

pacienteRouter.delete("/paciente/:id", pacienteController.deletarPaciente);
