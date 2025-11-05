import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { authController } from "../controller/authController/AuthController.js";


const authRouter = Router();


/**
 * @swagger
 * tags:
 *   name: Protuarios
 *   description: Rotas públicas e protegidas de autenticação JWT
 */




/**
 * @swagger
 * /protuarios:
 *   get:
 *     summary: Retornar lista de protuarios
 *     tags: [Autenticação]
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       201:
 *         description: Lista de protuarios retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
prontuarioRouter.get('/protuarios', prontuarioController.getTodosOsProntuarios);

/**
 * @swagger
 * /protuarios/{id}:
 *   get:
 *     summary: Retornar protuario especifica
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
 *         description: protuario retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
prontuarioRouter.get("/protuarios/:id", prontuarioController.getProtuarioPorId);


/**
 * @swagger
 * /protuarios:
 *   post:
 *     summary: Cria um novo protuario
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - descricao                
 *               - data           
 *               - medico_responsavel_id
 *               - paciente_id
 *		 - paciente_id           
 *             properties:
 *               descricao:
 *                 type: string
 *                 example: Dor de barriga
 *               data:
 *                 type: date
 *                 example: 20_20_2020
 *               medico_responsavel_id:
 *                 type: int
 *                 example: 1
 *               paciente_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       201:
 *         description: Protuario criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
prontuarioRouter.post("/protuarios", prontuarioController.criarProntuario);


/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Atualizar uma protuario
 *     tags: [Autenticação]
  *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - descricao                
 *               - data           
 *               - medico_responsavel_id
 *               - paciente_id
 *		 - paciente_id           
 *             properties:
 *               descricao:
 *                 type: string
 *                 example: Dor de barriga
 *               data:
 *                 type: date
 *                 example: 20_20_2020
 *               medico_responsavel_id:
 *                 type: int
 *                 example: 1
 *               paciente_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       201:
 *         description: Protuario Atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 */
prontuarioRouter.put("/protuarios/:id", prontuarioController.atualizarProntuario)


/**
 * @swagger
 * /protuarios/{id}:
 *   delete:
 *     summary: Deletar uma Exame
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
 *         description: Protuario Deletada com sucesso
 *       400:
 *         description: Dados inválidos
 */
prontuarioRouter.delete("/protuarios/:id", prontuarioController.deletarProntuario)



