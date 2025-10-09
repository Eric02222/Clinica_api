import { prismaClient } from '../../../prisma/prisma.js';

class ExameController {
    constructor() { }
    async getTodosOsExames(_, res) {

        try {
            const exames = await prismaClient.exame.findMany({});
            return res.json(exames);
        } catch (e) {
            console.log(e);
        }
    }

    async getExamePorId(req, res) {
        try {
            const exame = await prismaClient.exame.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });

            if (!exame) return res.status(404).send("Exame não encontrado");
            return res.json(exame);
        } catch (e) {
            console.log(e);
        }
    }

    async criarExame(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "tipo_exame" &&
                    key !== "resultado" &&
                    key !== "data_exame" &&
                    key !== "link_arquivo" &&
                    key !== "observacoes" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const exame = await prismaClient.exame.create({
                data: {
                    ...body,
                    data_exame: new Date(body.data_exame)
                },
            })
            return res.status(201).json(exame)
        } catch (error) {
            console.log(error);
            res.status(500).send(error)

        }
    }

    async atualizarExame(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "tipo_exame" &&
                    key !== "resultado" &&
                    key !== "data_exame" &&
                    key !== "link_arquivo" &&
                    key !== "observacoes" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }

            await prismaClient.exame.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })

            const exameAtualizado = await prismaClient.exame.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            res.status(201).json({
                message: "Exame atualizado!",
                data: exameAtualizado
            })

        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Exame não encontrado");
        }
    }

    async atualizarinfoEsp(req, res) {
        try {
            const { body, paramns } = req;
            await prismaClient.exame.patch({
                where: { id: Number(paramns.id) },
                data: {
                    ...body
                }
            })

            const exameAtualizado = await prismaClient.exame.findUnique({
                where: {
                    id: Number(paramns.id)
                }
            })

            res.status(201).json({
                message: "Protuario atualizada!",
                data: exameAtualizado
            })
        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Exame não encontrado");
        }
        
    }

    async deletarExame(req, res) {
        const { params } = req;
        try {
            const exameDeletado = await prismaClient.exame.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Exame deletado!",
                data: exameDeletado
            })
        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Exame não encontrado");

        }
    }
}

export const exameController = new ExameController();