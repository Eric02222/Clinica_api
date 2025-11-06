// Path: src/routes/usuarios.js

import { Router } from "express";
import { usuarioController } from "../controller/Usuario/UsuarioController.js";

export const usuarioRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Rotas protegidas para gerenciamento de usuários
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna a lista de usuários
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/usuarios/:id":
 *   get:
 *     summary: Pega usuário por id
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Adiquirir usuario por id
 *     responses:
 *       200:
 *         description: Retorna a lista de usuários
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/usuarios/byemail/":
 *   get:
 *     summary: Pega usuário por email
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Adiquirir usuario por email
 *     responses:
 *       200:
 *         description: Retorna usuário por email
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
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
 *               - cargo
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João da Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               senha:
 *                 type: string
 *                 example: 123456
 *               cargo:
 *                 type: string
 *                 example: Medico
 *     responses:
 *       200:
 *         description: Retorna a lista de usuários
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * /usuarios:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
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
 *               - cargo
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João da Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               senha:
 *                 type: string
 *                 example: 123456
 *               cargo:
 *                 type: string
 *                 example: Medico
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Adiquirir usuario por id
 *     responses:
 *       200:
 *         description: Atualiza um usuário
 *       401:
 *         description: Token inválido ou ausente
 */

/**
 * @swagger
 * "/usuarios/:id":
 *   delete:
 *     summary: Deleta usuário por id
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Deleta usuario por id
 *     responses:
 *       200:
 *         description: Deleta usuário
 *       401:
 *         description: Token inválido ou ausente
 */

usuarioRouter.get("/usuarios", usuarioController.getTodosOsUsuarios);
usuarioRouter.get("/usuarios/byemail/", usuarioController.getUsuarioPorEmail);
usuarioRouter.get("/usuarios/:id", usuarioController.getUsuarioPorId);
usuarioRouter.post("/usuarios", usuarioController.criarUsuario);
usuarioRouter.put("/usuarios/:id", usuarioController.atualizarUsuario);
usuarioRouter.delete("/usuarios/:id", usuarioController.deletarUsuario);