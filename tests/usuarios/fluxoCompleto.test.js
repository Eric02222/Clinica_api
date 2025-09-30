import { prismaClient } from "../../prisma/prisma";

test("Fluxo completo de usuário", async () => {
    // cria
    const usuario = await prismaClient.usuario.create({
        data: {
            nome: "teste",
            cargo: "teste@gmail.com",
            email: "123",
            senha: "Médico"
        },
    })

    // pega
    const res = await prismaClient.usuario.findUnique({
        where: {
            id: usuario.id
        }
    })


    // deleta
    await prismaClient.usuario.delete({
        where: {
            id: usuario.id,
        },
    })

    const resDelete = await prismaClient.usuario.findUnique({
        where: {
            id: usuario.id
        }
    })


    expect(resDelete).toBe(null);
});