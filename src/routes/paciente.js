import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { authController } from "../controller/authController/AuthController.js";


const authRouter = Router();


/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Rotas públicas e protegidas de autenticação JWT
 */




/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Retornar lista de pacientes
 *     tags: [Autenticação]
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       201:
 *         description: Lista de pacientes retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
pacienteRouter.get('/pacientes', pacienteController.getTodosOsPacientes);

/**
 * @swagger
 * /pacientes/{id}:
 *   get:
 *     summary: Retornar paciente especifico
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
 *         description: Paciente retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
pacienteRouter.get("/pacientes/:id", pacienteController.getPacientePorId);


/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Cria um novo paciente
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome                
 *               - cpf           
 *               - telefone
 *		 - email 
 *		 - data_nascimento
 *		 - responsavel
 *		 - sexo                  
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Carlos
 *               cpf:
 *                 type: string
 *                 example: 55555555548
 *               telefone:
 *                 type: int
 *                 example: 99999-99999
 *               email:
 *                 type: strig
 *                 example: exemplo@gmail.com
 *               data_nascimento:
 *                 type: date
 *                 example: 20_20_2020
 *               responsavel:
 *                 type: int
 *                 example: Pai
 *               sexo:
 *                 type: string
 *                 example: Maculino
 *     responses:
 *       201:
 *         description: Paciente criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
pacienteRouter.post("/pacientes", pacienteController.criarPaciente);


/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Atualizar uma paciente
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome                
 *               - cpf           
 *               - telefone
 *		 - email 
 *		 - data_nascimento
 *		 - responsavel
 *		 - sexo                  
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Carlos
 *               cpf:
 *                 type: string
 *                 example: 55555555548
 *               telefone:
 *                 type: int
 *                 example: 99999-99999
 *               email:
 *                 type: strig
 *                 example: exemplo@gmail.com
 *               data_nascimento:
 *                 type: date
 *                 example: 20_20_2020
 *               responsavel:
 *                 type: int
 *                 example: Pai
 *               sexo:
 *                 type: string
 *                 example: Maculino
 *     responses:
 *       201:
 *         description: Paciente Atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 */
pacienteRouter.put("/pacientes/:id", pacienteController.atualizarPaciente);


/**
 * @swagger
 * /pacientes/{id}:
 *   delete:
 *     summary: Deletar uma pacientes
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
 *         description: Paciente Deletada com sucesso
 *       400:
 *         description: Dados inválidos
 */
pacienteRouter.delete("/pacientes/:id", pacienteController.deletarPaciente);



