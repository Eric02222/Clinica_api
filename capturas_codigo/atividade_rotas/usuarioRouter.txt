import { Router } from 'express';
import { usuarioController } from '../controller/Usuario/UsuarioController.js';

export const usuarioRouter = Router();

//tabela Usuario
usuarioRouter.get('/usuarios', usuarioController.getTodosOsUsuarios);

usuarioRouter.get("/usuario/:id", usuarioController.getUsuarioPorId);

usuarioRouter.post("/usuarios", usuarioController.criarUsuario);

usuarioRouter.put("/usuario/:id", usuarioController.atualizarUsuario);

usuarioRouter.delete("/usuario/:id", usuarioController.deletarUsuario);
