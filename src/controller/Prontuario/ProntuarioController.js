import { prismaClient } from '../../../prisma/prisma.js';
import { getToken } from '../../utils/jwt.js';


class ProntuarioController {
    constructor() { }

    async getTodosOsProntuarios(req, res) {
        // const token = getToken(req.headers.authorization)
        const { query } = req;
        try {
            const protuarios = await prismaClient.protuario.findMany({
                // where: {
                //     medico_responsavel_id: token.usuarioId
                // },
                where:{
                    data:{
                        lte: query.dataFinal ?  new Date(query.dataFinal) : undefined,
                        gte: query.dataInicio ? new Date(query.dataInicio) : undefined
                    },
                    
                    paciente: {
                        nome: query.paciente
                    }
                }


            });
            return res.json(protuarios);
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    async getProtuarioPorId(req, res) {
        try {
            const token = getToken(req.headers.authorization)
            const protuario = await prismaClient.protuario.findUnique({
                where: {
                    id: Number(req.params.id),
                    medico_responsavel_id: token.usuarioId
                }
            });

            // if (protuario.medico_responsavel_id !== token.usuarioId) {
            //     return res.status(404).send("Não tem acesso a esse prontuario");
            // }

            if (!protuario) return res.status(404).send("Protuario não encontrado");
            return res.json(protuario);
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    async criarProntuario(req, res) {
        try {
            const { body } = req;
            const token = getToken(req.headers.authorization)
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "descricao" &&
                    key !== "data" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const protuario = await prismaClient.protuario.create({
                data: {
                    ...body,
                    medico_responsavel_id: token.usuarioId,
                    data: new Date(body.data),
                },
            })
            return res.status(201).json(protuario)
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }


    async atualizarProntuario(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "descricao" &&
                    key !== "data" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }

            await prismaClient.protuario.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })

            const protuarioAtualizado = await prismaClient.protuario.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            res.status(201).json({
                message: "Protuario atualizada!",
                data: protuarioAtualizado
            })

        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Protuario não encontrado");
            res.status(500).send(error)
        }
    }

    async atualizarinfoEsp(req, res) {
        try {
            const { body, paramns } = req;
            await prismaClient.protuario.patch({
                where: { id: Number(paramns.id) },
                data: {
                    ...body
                }
            })

            const protuarioAtualizado = await prismaClient.protuario.findUnique({
                where: {
                    id: Number(paramns.id)
                }
            })

            res.status(201).json({
                message: "Protuario atualizada!",
                data: protuarioAtualizado
            })
        } catch (error) {
            if (error.code === "P2025") return res.status(404).send("Protuario não encontrado");
            res.status(500).send(error)
        }
    }


    async deletarProntuario(req, res) {
        const { params } = req;
        try {
            const protuarioDeletado = await prismaClient.protuario.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "protuario deletada!",
                data: protuarioDeletado
            })
        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Protuario não encontrado");

        }
    }
}

export const prontuarioController = new ProntuarioController();