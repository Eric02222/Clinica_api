import { Router } from "express";
import { pacienteController } from "../controller/Paciente/PacienteController.js"

export const pacienteRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Rotas protegidas para gerenciamento de Pacientes
 */

/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Lista todos os Pacientes
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna a lista de pacientes
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/pacientes/:id":
 *   get:
 *     summary: Pega paciente por id
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Adiquirir paciente por id
 *     responses:
 *       200:
 *         description: Retorna uma paciente especifica
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Cria um novo paciente
 *     tags: [Pacientes]
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
 *         description: Cria um novo paciente
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /pacientes/:id:
 *   put:
 *     summary: Atualizar um paciente
 *     tags: [Pacientes]
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
 *         description: Atualiza paciente por id
 *     responses:
 *       200:
 *         description: Atualiza paciente especifico
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/pacientes/:id":
 *   delete:
 *     summary: Deleta paciente por id
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Deleta paciente por id
 *     responses:
 *       200:
 *         description: Deleta paciente por id
 *       401:
 *         description: Token inválido ou ausente
 */



pacienteRouter.get("/pacientes", pacienteController.getTodosOsPacientes)
pacienteRouter.get("/pacientes/:id", pacienteController.getPacientePorId)
pacienteRouter.post("/pacientes", pacienteController.criarPaciente)
pacienteRouter.put("/pacientes/:id", pacienteController.atualizarPaciente)
pacienteRouter.delete("/pacientes/:id", pacienteController.deletarPaciente)