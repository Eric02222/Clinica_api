import { prismaClient } from "../../prisma/prisma";

test('Get/ usuario especifico', async () => {
    const email = String("joao314@email.com")
    const usuario = await prismaClient.usuario.findUnique({
        where: {
            email
        }
    })
    const usuarioSolicitado = {
        id: 8,
        nome: "Joao",
        email: "joao314@email.com",
        senha: "123",
        cargo: "Médico"
    }
    expect(usuario).toEqual(usuarioSolicitado);
})
