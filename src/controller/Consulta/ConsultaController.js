import { prismaClient } from '../../../prisma/prisma.js';

class ConsultaController {
    constructor() { }
    async getTodosOsConsultas(_, res) {
        try {
            const consultas = await prismaClient.Consulta.findMany();
            return res.json(consultas);
        } catch (e) {
            console.log(e);
        }
    }

    async getConsultaPorId(req, res) {
        try {
            const consulta = await prismaClient.Consulta.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });

            if (!consulta) return res.status(404).send("Consulta não encontrado");
            return res.json(consulta);
        } catch (e) {
            console.log(e);
        }
    }

    async criarConsulta(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "motivo" &&
                    key !== "data_consulta" &&
                    key !== "observacoes" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const consulta = await prismaClient.Consulta.create({
                data: {
                    ...body,
                    data_consulta: new Date(body.data_consulta)
                },
            })
            return res.status(201).json(consulta)
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    async atualizarConsulta(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "motivo" &&
                    key !== "data_consulta" &&
                    key !== "observacoes" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }

            await prismaClient.Consulta.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })

            const consultaAtualizado = await prismaClient.Consulta.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            res.status(201).json({
                message: "Consulta atualizada!",
                data: consultaAtualizado
            })

        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Consulta não encontrado");
            res.status(500).send(error)
        }
    }

    async deletarConsulta(req, res) {
        const { params } = req;
        try {
            const consultaDeletado = await prismaClient.Consulta.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Consulta deletada!",
                data: consultaDeletado
            })
        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Consulta não encontrado");
            res.status(500).send(error)
        }
    }
}

export const consultaController = new ConsultaController();