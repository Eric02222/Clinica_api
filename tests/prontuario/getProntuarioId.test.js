import { prismaClient } from "../../prisma/prisma";

test('Get/ Prontuario especifico', async () => {
    const res = await prismaClient.protuario.findUnique({
        where: {
            id: 2
        }
    });

    expect(res.descricao).toBe("algum prioblema grave")
})