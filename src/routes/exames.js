import { Router } from 'express';
import { exameController } from '../controller/Exame/ExameController.js';

export const exameRouter = Router();

//tabela Exames
exameRouter.get('/exames', exameController.getTodosOsExames);

exameRouter.get("/exames/:id", exameController.getExamePorId);

exameRouter.post("/exames", exameController.criarExame);

exameRouter.put("/exames/:id", exameController.atualizarExame);

exameRouter.delete("/exames/:id", exameController.deletarExame);
