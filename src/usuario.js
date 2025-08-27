import { prismaClient } from '../prisma/prisma.js';

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
        const bodyKeys = Object.keys(body) // Aqui pegamos todas as chaves do objeto e é gerado um array de strings para a gente, com o formato de ["chave1", "chave2".....]
        console.log(bodyKeys)
        for (const key of bodyKeys) {
            if (key !== "nome" &&
                key !== "cargo" &&
                key !== "email" &&
                key !== "senha"
            ) return res.status(404).send("Colunas não existentes")
        }

        const usuario = await prismaClient.usuario.create({
            data: {
                ...body
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
        const bodyKeys = Object.keys(body)
        for (const key of bodyKeys) {
            for (const key of bodyKeys) {
                if (key !== "nome" &&
                    key !== "cargo" &&
                    key !== "email" &&
                    key !== "senha"
                ) return res.status(404).send("Colunas não existentes")
            }
        }

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
