import { prismaClient } from "../../prisma/prisma";

test("Fluxo completo de prontuario", async () => {
    // cria
    const prontuario = await prismaClient.protuario.create({
        data: {         
            descricao: "teste",
            data: "2025-08-25T00:00:00.000Z",
            medico_responsavel_id: 1,
            paciente_id: 1
    },
    })

    // pega
    const res = await prismaClient.protuario.findUnique({
        where: {
            id: prontuario.id
        }
    })


    // deleta
    await prismaClient.protuario.delete({
        where: {
            id: prontuario.id,
        },
    })

    const resDelete = await prismaClient.protuario.findUnique({
        where: {
            id: prontuario.id
        }
    })


    expect(resDelete).toBe(null);
});