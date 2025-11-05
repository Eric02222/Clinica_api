import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { authController } from "../controller/authController/AuthController.js";


const authRouter = Router();


/**
 * @swagger
 * tags:
 *   name: Exames
 *   description: Rotas públicas e protegidas de autenticação JWT
 */




/**
 * @swagger
 * /exames:
 *   get:
 *     summary: Retornar lista de exames
 *     tags: [Autenticação]
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       201:
 *         description: Lista de exames retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
exameRouter.get('/exames', exameController.getTodosOsExames);


/**
 * @swagger
 * /exames/{id}:
 *   get:
 *     summary: Retornar exame especifica
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
 *         description: Exame retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
exameRouter.get("/exames/:id", exameController.getExamePorId);


/**
 * @swagger
 * /exames:
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
 *               - tipo_exame
 *               - resultado    
 *               - data_exame           
 *               - link_arquivo 
 *		 - observacoes  
 *               - paciente_id           
 *             properties:
 *               tipo_exame:
 *                 type: string
 *                 example: Dor de barriga
 *               resultado:
 *                 type: string
 *                 example: algo no estomago
 *               resultado:
 *                 type: date
 *                 example: 20_20_2020
 *               link_arquivo :
 *                 type: string
 *                 example: https://link_arquivo
 *               observacoes:
 *                 type: string
 *                 example: Dor constante na barriga...
 *               paciente_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       201:
 *         description: Consulta criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
exameRouter.post("/exames", exameController.criarExame);


/**
 * @swagger
 * /exames/{id}:
 *   put:
 *     summary: Atualizar uma Exame
 *     tags: [Autenticação]
 *      *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tipo_exame
 *               - resultado    
 *               - data_exame           
 *               - link_arquivo 
 *		 - observacoes  
 *               - paciente_id           
 *             properties:
 *               tipo_exame:
 *                 type: string
 *                 example: Dor de barriga
 *               resultado:
 *                 type: string
 *                 example: algo no estomago
 *               resultado:
 *                 type: date
 *                 example: 20_20_2020
 *               link_arquivo :
 *                 type: string
 *                 example: https://link_arquivo
 *               observacoes:
 *                 type: string
 *                 example: Dor constante na barriga...
 *               paciente_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       201:
 *         description: Exame Atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 */
exameRouter.put("/exames/:id", exameController.atualizarExame);

/**
 * @swagger
 * /exames/{id}:
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
 *         description: Exame Deletada com sucesso
 *       400:
 *         description: Dados inválidos
 */
exameRouter.delete("/exames/:id", exameController.deletarExame);
