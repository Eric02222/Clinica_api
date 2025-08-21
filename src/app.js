import express from 'express';
import { prismaClient } from '../prisma/prisma.js';


const app = express();

app.use(express.json());

//tabela Usuario

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await prismaClient.usuario.findMany();
        return res.json(usuarios);
    } catch (e) {
        console.log(e);
    }
});

app.get("/usuarios/:id", async (req, res) => {
    try {
        const usuario = await prismaClient.usuario.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });

        if (!usuario) return res.status(404).send("Usuario não encontrado");
        return res.json(usuario);
    } catch (e) {
        console.log(e);
    }
});

app.post("/usuarios", async (req, res) => {
    try {
        const { body } = req;
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
        console.log(error);
        if (error.code === "P2002") return res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!");

    }
});

app.put("/usuario/:id", async (req, res) => {
    try {
        const { body, params } = req;

        if (body.nome || body.email || body.cargo || body.senha) {
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
            return res.status(404).send("Atributos enviados não condizem com o schema");
        }

    } catch (error) {
        console.log(error)
        if (error.code === "P2025") return res.status(404).send("Usuario não encontrado");

        if (error.code === "P2002") return res.status(404).send("Falha ao atualizar usuário: Email já cadastrado!");
    }
})

app.delete("/usuario/:id", async (req, res) => {
    const { params } = req;
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
        console.log(error)
        if (error.code === "P2025") return res.status(404).send("Usuario não encontrado");

    }
})


//tabela paciente

app.get('/pacientes', async (req, res) => {
    try {
        const pacientes = await prismaClient.Paciente.findMany();
        return res.json(pacientes);
    } catch (e) {
        console.log(e);
    }
});

app.get("/paciente/:id", async (req, res) => {
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
});

app.post("/pacientes", async (req, res) => {
    try {
        const { body } = req;
        const paciente = await prismaClient.Paciente.create({
            data: {
                nome: body.nome,
                cpf: body.cpf,
                telefone: body.telefone,
                email: body.email,
                data_nascimento: body.data_nascimento,
                responsavel: body.responsavel,
                sexo: body.sexo
            },
        })
        return res.status(201).json(paciente)
    } catch (error) {
        console.log(error);
    }
});

app.put("/paciente/:id", async (req, res) => {
    try {
        const { body, params } = req;

        if (body.nome || body.cpf || body.telefone || body.email || body.data_nascimento || body.responsavel || body.sexo) {
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

        } else {
            return res.status(404).send("Atributos enviados não condizem com o schema");
        }

    } catch (error) {
        console.log(error)
        if (error.code === "P2025") return res.status(404).send("Paciente não encontrado");
    }
})

app.delete("/paciente/:id", async (req, res) => {
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

    }
})

//tabela Exames

app.get('/exames', async (req, res) => {
    try {
        const exames = await prismaClient.Exame.findMany();
        return res.json(exames);
    } catch (e) {
        console.log(e);
    }
});

app.get("/exame/:id", async (req, res) => {
    try {
        const exame = await prismaClient.Exame.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });

        if (!exame) return res.status(404).send("Exame não encontrado");
        return res.json(exame);
    } catch (e) {
        console.log(e);
    }
});

app.post("/exame", async (req, res) => {
    try {
        const { body } = req;
        const exame = await prismaClient.Exame.create({
            data: {
                tipo_exame: body.tipo_exame,
                resultado: body.resultado,
                data_exame: body.data_exame,
                link_arquivo: body.link_arquivo,
                observacoes: body.observacoes,
                paciente_id: body.paciente_id
            },
        })
        return res.status(201).json(exame)
    } catch (error) {
        console.log(error);
    }
});

app.put("/exame/:id", async (req, res) => {
    try {
        const { body, params } = req;

        if (!!body.tipo_exame || !!body.resultado || !!body.data_exame || !!body.link_arquivo || !!body.observacoes || !!body.paciente_id) {
            await prismaClient.Exame.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })

            const exameAtualizado = await prismaClient.Exame.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            res.status(201).json({
                message: "Exame atualizado!",
                data: exameAtualizado
            })

        } else {
            return res.status(404).send("Atributos enviados não condizem com o schema");
        }

    } catch (error) {
        console.log(error)
        if (error.code === "P2025") return res.status(404).send("Exame não encontrado");
    }
})

app.delete("/exame/:id", async (req, res) => {
    const { params } = req;
    try {
        const exameDeletado = await prismaClient.Exame.delete({
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
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})