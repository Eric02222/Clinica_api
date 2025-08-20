import express from 'express';
import { prismaClient } from '../prisma/prisma.js';


const app = express();

app.use(express.json());

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

app.put("/usuarios/:id", async (req, res) => {
    try {
        const { body, params } = req;

        if(body.nome || body.email || body.cargo || body.senha){
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
            
        }else{
            return res.status(404).send("Atributos enviados não condizem com o schema");
        }
        
    } catch (error) {
        console.log(error)
        if (error.code === "P2025") return res.status(404).send("Usuario não encontrado");

        if (error.code === "P2002") return res.status(404).send("Falha ao atualizar usuário: Email já cadastrado!");
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})