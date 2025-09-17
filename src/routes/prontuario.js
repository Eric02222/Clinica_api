import { Router } from 'express';
import { prontuarioController } from '../controller/Prontuario/ProntuarioController.js';
export const prontuarioRouter = Router();

//prontuario
prontuarioRouter.get('/protuarios', prontuarioController.getTodosOsProntuarios);

prontuarioRouter.get("/protuarios/:id", prontuarioController.getProtuarioPorId);

prontuarioRouter.post("/protuarios", prontuarioController.criarProntuario);

prontuarioRouter.put("/protuarios/:id", prontuarioController.atualizarProntuario)

prontuarioRouter.delete("/protuarios/:id", prontuarioController.deletarProntuario)