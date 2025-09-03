import { prismaClient } from '../../../prisma/prisma.js';


class ProntuarioController {
    constructor() { }
    async getTodosOsProntuarios(_, res) {
        try {
            const protuarios = await prismaClient.Protuario.findMany();
            return res.json(protuarios);
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    async getProtuarioPorId(req, res) {
        try {
            // const {params} = req;
            const protuario = await prismaClient.Protuario.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });

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
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "descricao" &&
                    key !== "data" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const protuario = await prismaClient.Protuario.create({
                data: {
                    ...body,
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

            await prismaClient.Protuario.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })

            const protuarioAtualizado = await prismaClient.Protuario.findUnique({
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

    async deletarProntuario(req, res) {
        const { params } = req;
        try {
            const protuarioDeletado = await prismaClient.Protuario.delete({
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