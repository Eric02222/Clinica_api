import { Router } from 'express';
import { exameController } from '../controller/Exame/ExameController.js';

export const exameRouter = Router();

//tabela Exames
exameRouter.get('/exames', exameController.getTodosOsExames);

exameRouter.get("/exame/:id", exameController.getExamePorId);

exameRouter.post("/exames", exameController.criarExame);

exameRouter.put("/exame/:id", exameController.atualizarExame);

exameRouter.delete("/exame/:id", exameController.deletarExame);
