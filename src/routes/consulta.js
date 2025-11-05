import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { authController } from "../controller/authController/AuthController.js";


const authRouter = Router();


/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Rotas públicas e protegidas de autenticação JWT
 */




/**
 * @swagger
 * /consultas:
 *   get:
 *     summary: Retornar lista de Consultas
 *     tags: [Autenticação]
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       201:
 *         description: Lista de consultas retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
consultaRouter.post("/consultas", consultaController.criarConsulta);


/**
 * @swagger
 * /consultas/{id}:
 *   get:
 *     summary: Retornar Consulta especifica
 *     tags: [Autenticação]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The user ID.
 *     responses:
 *       201:
 *         description: Lista de consultas retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
consultaRouter.get("/consultas/:id", consultaController.getConsultaPorId);


/**
 * @swagger
 * /consultas:
 *   post:
 *     summary: Cria um nova Consulta
 *     tags: [Autenticação]
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
 *                 example: Dor de barriga
 *               data_consulta:
 *                 type: date
 *                 example: 20-20-2020
 *               observacoes:
 *                 type: string
 *                 example: Dor constante na barriga...
 *               medico_responsavel_id:
 *                 type: int
 *                 example: 1
 *               paciente_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       201:
 *         description: Consulta criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
consultaRouter.post("/consultas", consultaController.criarConsulta);


/**
 * @swagger
 * /consultas/{id}:
 *   put:
 *     summary: Atualizar uma Consulta
 *     tags: [Autenticação]
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
 *                 example: Dor de barriga
 *               data_consulta:
 *                 type: date
 *                 example: 20-20-2020
 *               observacoes:
 *                 type: string
 *                 example: Dor constante na barriga...
 *               medico_responsavel_id:
 *                 type: int
 *                 example: 1
 *               paciente_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       201:
 *         description: Consulta Atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 */
consultaRouter.put("/consultas/:id", consultaController.atualizarConsulta);

/**
 * @swagger
 * /consultas/{id}:
 *   delete:
 *     summary: Deletar uma Consulta
 *     tags: [Autenticação]
 *      parameters:
 *       - in: path
 *        name: id # Note the name is the same as in the path
 *         required: true
 *         schema:
 *           type: int
 *           minimum: 1
 *         description: The user ID
 *     responses:
 *       201:
 *         description: Consulta Deletada com sucesso
 *       400:
 *         description: Dados inválidos
 */
consultaRouter.delete("/consultas/:id", consultaController.criarConsulta);



