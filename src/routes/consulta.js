import { Router } from 'express';
import { consultaController } from '../controller/Consulta/ConsultaController.js';

export const consultaRouter = Router();

//Consulta 
consultaRouter.get('/consultas', consultaController.getTodosOsConsultas);

consultaRouter.get("/consultas/:id", consultaController.getConsultaPorId);

consultaRouter.post("/consultas", consultaController.criarConsulta);

consultaRouter.put("/consultas/:id", consultaController.atualizarConsulta);

consultaRouter.delete("/consultas/:id", consultaController.criarConsulta);
