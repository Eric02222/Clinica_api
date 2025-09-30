import { prismaClient } from "../../prisma/prisma";

test('Put/ atualizar usuario', async () => {
    const idUser = 178
    await prismaClient.usuario.update({
        where: { id: idUser },
        data: {
            nome: "João Santos henrique",
            email: "SantoH@gmail.com",
            senha: "123",
            cargo: "Médico"
        },
    })

    const res = await prismaClient.usuario.findUnique({
        where: {
            id: idUser
        }
    })

    expect(res.email).toBe("SantoH@gmail.com");
});