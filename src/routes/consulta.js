import { Router } from "express";
import { consultaController } from "../controller/Consulta/ConsultaController.js"

export const consultaRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Rotas protegidas para gerenciamento de Consultas
 */

/**
 * @swagger
 * /consultas:
 *   get:
 *     summary: Lista todos os Consultas
 *     tags: [Consultas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna a lista de Consultas
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/consultas/:id":
 *   get:
 *     summary: Pega consulta por id
 *     tags: [Consultas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Adiquirir consulta por id
 *     responses:
 *       200:
 *         description: Retorna uma consulta especifica
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /consultas:
 *   post:
 *     summary: Cria um novo consulta
 *     tags: [Consultas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - motivo
 *               - data_consulta
 *               - observacoes
 *               - medico_responsavel_id
 *               - paciente_id 
 *             properties:
 *               motivo:
 *                 type: string
 *                 example: dor de cabeça
 *               data_consulta:
 *                 type: date
 *                 example: 1992-02-16
 *               observacoes:
 *                 type: string
 *                 example: precisa de remedio
 *               medico_responsavel_id:
 *                 type: int
 *                 example: 1
 *               paciente_id :
 *                 type: int
 *                 example: 1
 *     responses:
 *       200:
 *         description: Cria uma nova consulta
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /consultas/:id:
 *   put:
 *     summary: Atualizar uma consulta
 *     tags: [Consultas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - motivo
 *               - data_consulta
 *               - observacoes
 *               - medico_responsavel_id
 *               - paciente_id 
 *             properties:
 *               motivo:
 *                 type: string
 *                 example: dor de cabeça
 *               data_consulta:
 *                 type: date
 *                 example: 1992-02-16
 *               observacoes:
 *                 type: string
 *                 example: precisa de remedio
 *               medico_responsavel_id:
 *                 type: int
 *                 example: 1
 *               paciente_id :
 *                 type: int
 *                 example: 1
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Atualiza consulta por id
 *     responses:
 *       200:
 *         description: Atualiza consulta especifico
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/consultas/:id":
 *   delete:
 *     summary: Deleta consulta por id
 *     tags: [Consultas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Deleta consulta por id
 *     responses:
 *       200:
 *         description: Deleta consulta por id
 *       401:
 *         description: Token inválido ou ausente
 */


consultaRouter.get("/consultas", consultaController.getTodosOsConsultas)
consultaRouter.get("/consultas/:id", consultaController.getConsultaPorId)
consultaRouter.post("/consultas", consultaController.criarConsulta)
consultaRouter.put("/consultas/:id", consultaController.atualizarConsulta)
consultaRouter.delete("/consultas/:id", consultaController.deletarConsulta)