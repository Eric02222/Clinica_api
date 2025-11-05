import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { authController } from "../controller/authController/AuthController.js";


const authRouter = Router();


/**
 * @swagger
 * tags:
 *   name: Psuarios
 *   description: Rotas públicas e protegidas de autenticação JWT
 */




/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Retornar lista de usuarios
 *     tags: [Autenticação]
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       201:
 *         description: Lista de usuarios retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
usuarioRouter.get('/usuarios', usuarioController.getTodosOsUsuarios);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Retornar usuario especifico
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
 *         description: Usuario retornada com sucesso
 *       400:
 *         description: Dados inválidos
 */
usuarioRouter.get("/usuarios/:id", usuarioController.getUsuarioPorId);


/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuario
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome                
 *               - email                 
 *               - senha      
 *		 - cargo                     
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Carlos
 *               email:
 *                 type: string
 *                 example: exemplo@gmail.com
 *               senha:
 *                 type: string
 *                 example: 20_20_2020
 *               cargo:
 *                 type: string
 *                 example: Medico
 *     responses:
 *       201:
 *         description: Usuario criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
usuarioRouter.post("/usuarios", usuarioController.criarUsuario);


/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualizar uma usuario
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome                
 *               - email                 
 *               - senha      
 *		 - cargo                     
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Carlos
 *               email:
 *                 type: string
 *                 example: exemplo@gmail.com
 *               senha:
 *                 type: string
 *                 example: 20_20_2020
 *               cargo:
 *                 type: string
 *                 example: Medico
 *     responses:
 *       201:
 *         description: Usuario Atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 */
usuarioRouter.put("/usuarios/:id", usuarioController.atualizarUsuario);


/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Deletar uma usuarios
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
 *         description: Usuario Deletada com sucesso
 *       400:
 *         description: Dados inválidos
 */
usuarioRouter.delete("/usuarios/:id", usuarioController.deletarUsuario);



