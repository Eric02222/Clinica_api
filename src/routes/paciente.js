import { Router } from 'express';
import { pacienteController } from '../controller/Paciente/PacienteController.js';
export const pacienteRouter = Router();

//tabela paciente
pacienteRouter.get('/pacientes', pacienteController.getTodosOsPacientes);

pacienteRouter.get("/pacientes/:id", pacienteController.getPacientePorId);

pacienteRouter.post("/pacientes", pacienteController.criarPaciente);

pacienteRouter.put("/pacientes/:id", pacienteController.atualizarPaciente);

pacienteRouter.delete("/pacientes/:id", pacienteController.deletarPaciente);
