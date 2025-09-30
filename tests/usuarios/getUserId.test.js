import { prismaClient } from "../../prisma/prisma";

test('Get/ usuario especifico', async () => {
    const res = await prismaClient.usuario.findUnique({
        where: {
            id: 147
        }
    })
    expect(res.nome).toBe("Jorge santos");
})
