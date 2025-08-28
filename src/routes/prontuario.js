import { Router } from 'express';
import { prontuarioController } from '../controller/Prontuario/ProntuarioController.js';
export const prontuarioRouter = Router();

//prontuario
prontuarioRouter.get('/protuarios', prontuarioController.getTodosOsProntuarios);

prontuarioRouter.get("/protuario/:id", prontuarioController.getProtuarioPorId);

prontuarioRouter.post("/protuarios", prontuarioController.criarProntuario);

prontuarioRouter.put("/protuario/:id", prontuarioController.atualizarProntuario)

prontuarioRouter.delete("/protuario/:id", prontuarioController.deletarProntuario)