import { Router } from 'express';
import { consultaController } from '../controller/Consulta/ConsultaController.js';

export const consultaRouter = Router();

//Consulta 
consultaRouter.get('/consultas', consultaController.getTodosOsConsultas);

consultaRouter.get("/consulta/:id", consultaController.getConsultaPorId);

consultaRouter.post("/consultas", consultaController.criarConsulta);

consultaRouter.put("/consulta/:id", consultaController.atualizarConsulta);

consultaRouter.delete("/consulta/:id", consultaController.criarConsulta);
