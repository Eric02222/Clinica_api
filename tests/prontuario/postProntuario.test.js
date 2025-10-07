import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna usuarios', async () => {
    const data = {
        descricao: "algum problema grave",
        data: "2002-11-07T00:00:00.000Z",
        medico_responsavel_id: 8,
        paciente_id: 6
    }

    const prontuario = await prismaClient.protuario.create({
        data: data,
    })

    await prismaClient.protuario.delete({
        where: {
            id: Number(prontuario.id),
        }
    })

    expect(prontuario).toMatchObject(prontuario)
});
