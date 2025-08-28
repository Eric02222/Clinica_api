import { prismaClient } from '../../../prisma/prisma.js';

class PacienteController {
    constructor() { }
    async getTodosOsPacientes(_, res) {
        try {
            const pacientes = await prismaClient.Paciente.findMany();
            return res.json(pacientes);
        } catch (e) {
            console.log(e);
        }
    }

    async getPacientePorId(req, res) {
        try {
            const paciente = await prismaClient.Paciente.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });

            if (!paciente) return res.status(404).send("Paciente não encontrado");
            return res.json(paciente);
        } catch (e) {
            console.log(e);
        }
    }

    async criarPaciente(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body)
            console.log(bodyKeys)
            for (const key of bodyKeys) {
                if (key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "data_nascimento" &&
                    key !== "sexo" &&
                    key !== "responsavel"
                ) return res.status(404).send("Colunas não existentes")
            }
            const paciente = await prismaClient.paciente.create({
                data: {
                    ...body,
                    data_nascimento: new Date(body.data_nascimento),
                },
            })
            return res.status(201).json(paciente)
        } catch (error) {
            console.log(error);
        }
    }

    async atualizarPaciente(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                for (const key of bodyKeys) {
                    if (key !== "nome" &&
                        key !== "cpf" &&
                        key !== "telefone" &&
                        key !== "email" &&
                        key !== "data_nascimento" &&
                        key !== "sexo" &&
                        key !== "responsavel"
                    ) return res.status(404).send("Colunas não existentes")
                }
            }
            await prismaClient.Paciente.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })

            const pacienteAtualizado = await prismaClient.Paciente.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            res.status(201).json({
                message: "Paciente atualizado!",
                data: pacienteAtualizado
            })

        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Paciente não encontrado");
        }
        if (error.code === "P2002") {
            res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
        }
    }

    async deletarPaciente(req, res) {
        const { params } = req;
        try {
            const pacienteDeletado = await prismaClient.Paciente.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Paciente deletado!",
                data: pacienteDeletado
            })
        } catch (error) {
            console.log(error)
            if (error.code === "P2025") return res.status(404).send("Paciente não encontrado");
            if (error.code == "P2003") return res.status(404).send("Paciente não pode ser excluido, pois possui exames vinculados.")

        }
    }
}

export const pacienteController = new PacienteController();