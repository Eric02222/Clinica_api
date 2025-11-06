import { Router } from "express";
import { prontuarioController } from "../controller/Prontuario/ProntuarioController.js"

export const prontuarioRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Prontuarios
 *   description: Rotas protegidas para gerenciamento de prontuarios
 */

/**
 * @swagger
 * /prontuarios:
 *   get:
 *     summary: Lista todos os prontuarios
 *     tags: [Prontuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna a lista de prontuarios
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/prontuarios/:id":
 *   get:
 *     summary: Pega prontuario por id
 *     tags: [Prontuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Adiquirir prontuario por id
 *     responses:
 *       200:
 *         description: Retorna uma prontuario especifica
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /prontuarios:
 *   post:
 *     summary: Cria um novo prontuario
 *     tags: [Prontuarios]
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
 *         description: Cria um novo prontuario
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /prontuarios/:id:
 *   put:
 *     summary: Atualizar um prontuario
 *     tags: [Prontuarios]
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
 *         description: Atualiza prontuario por id
 *     responses:
 *       200:
 *         description: Atualiza prontuario especifico
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/prontuarios/:id":
 *   delete:
 *     summary: Deleta prontuario por id
 *     tags: [Prontuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Deleta prontuario por id
 *     responses:
 *       200:
 *         description: Deleta prontuario por id
 *       401:
 *         description: Token inválido ou ausente
 */



prontuarioRouter.get("/prontuarios", prontuarioController.getTodosOsProntuarios)
prontuarioRouter.get("/prontuarios/:id", prontuarioController.getProtuarioPorId)
prontuarioRouter.post("/prontuarios", prontuarioController.criarProntuario)
prontuarioRouter.put("/prontuarios/:id", prontuarioController.atualizarProntuario)
prontuarioRouter.delete("/prontuarios/:id", prontuarioController.deletarProntuario)