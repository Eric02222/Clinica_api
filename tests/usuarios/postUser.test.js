import { prismaClient } from "../../prisma/prisma";

test('Post/ usuarios', async () => {
    const data = {
        nome: "João Santo DIas aqwe",
        cargo: "Santo@gmail.com",
        email: "123",
        senha: "Médico"
    }

    const usuario = await prismaClient.usuario.create({
        data: data,
    })

    await prismaClient.usuario.delete({
        where: {
            id: Number(usuario.id),
        },
    })

    expect(usuario).toMatchObject(usuario)
});