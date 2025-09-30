import { Prisma } from '@prisma/client';
import { prismaClient } from '../../../prisma/prisma.js';


class UsuarioController {
    constructor() { }
    async getTodosOsUsuarios(req, res) {
        const { page, limit } = req.query
        const pageNumber = Number(page);
        const pageLimit = Number(limit);
        try {
            const usuarios = await prismaClient.usuario.findMany({
                skip: (pageNumber - 1) * pageLimit,
                take: pageLimit,
            });
            return res.json(usuarios)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getUsuarioPorId(req, res) {
        try {
            const { params } = req
            const usuario = await prismaClient.usuario.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
            if (!usuario) return res.status(404).send("Usuário não existe!")
            return res.json(usuario)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getUsuarioPoremail(req, res) {
        try {
            const { params } = req
            const usuario = await prismaClient.usuario.findUnique({
                where: {
                    email: String(params.email)
                }
            })
            if (!usuario) return res.status(404).send("Usuário não existe!")
            return res.json(usuario)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarUsuario(req, res) {
        try {
            const { body } = req
            const usuario = await prismaClient.usuario.create({
                data: {
                    nome: body.nome,
                    cargo: body.cargo,
                    email: body.email,
                    senha: body.senha
                },
            })
            return res.status(201).json(usuario)
        } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
            }
        }
    }
    async atualizarUsuario(req, res) {
        try {
            const { body, params } = req
            if (body.nome || body.cargo || body.email || body.senha) {
                await prismaClient.usuario.update({
                    where: { id: Number(params.id) },
                    data: {
                        ...body
                    },
                })

                const usuarioAtualizado = await prismaClient.usuario.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })

                res.status(201).json({
                    message: "Usuário atualizado!",
                    data: usuarioAtualizado
                })
            } else {
                res.status(404).send("Atributos enviados não condizem com o schema")
            }
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
            }
        }
    }

    async atualizarinfoEsp(req, res) {
        try {
            const { body, paramns } = req;
            await prismaClient.usuario.patch({
                where: { id: Number(paramns.id) },
                data: {
                    ...body
                }
            })

            const usuarioAtualizado = await prismaClient.usuario.findUnique({
                where: {
                    id: Number(paramns.id)
                }
            })

            res.status(201).json({
                message: "Usuário atualizado!",
                data: usuarioAtualizado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
            }
        }
    }

    async deletarUsuario(req, res) {
        const { params } = req
        try {
            const usuarioDeletado = await prismaClient.usuario.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Usuário deletado!",
                data: usuarioDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco")
            }
        }
    }
}

export const usuarioController = new UsuarioController();