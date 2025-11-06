import { Router } from "express";
import { exameController } from "../controller/Exame/ExameController.js" 

export const exameRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Exames
 *   description: Rotas protegidas para gerenciamento de exames
 */

/**
 * @swagger
 * /exames:
 *   get:
 *     summary: Lista todos os exames
 *     tags: [Exames]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna a lista de exames
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/exames/:id":
 *   get:
 *     summary: Pega exame por id
 *     tags: [Exames]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Adiquirir exame por id
 *     responses:
 *       200:
 *         description: Retorna uma exame especifica
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /consultas:
 *   post:
 *     summary: Cria um novo exame
 *     tags: [Exames]
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
 *         description: Cria um novo exame
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /exames/:id:
 *   put:
 *     summary: Atualizar um exame
 *     tags: [Exames]
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
 *         description: Atualiza exame por id
 *     responses:
 *       200:
 *         description: Atualiza exame especifico
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/exames/:id":
 *   delete:
 *     summary: Deleta exame por id
 *     tags: [Exames]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Deleta exame por id
 *     responses:
 *       200:
 *         description: Deleta exame por id
 *       401:
 *         description: Token inválido ou ausente
 */


exameRouter.get("/exames", exameController.getTodosOsExames)
exameRouter.get("/exames/:id", exameController.getExamePorId)
exameRouter.post("/exames", exameController.criarExame)
exameRouter.put("/exames/:id", exameController.atualizarExame)
exameRouter.delete("/exames/:id", exameController.deletarExame)