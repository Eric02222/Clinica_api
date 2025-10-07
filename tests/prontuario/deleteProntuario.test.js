import { prismaClient } from "../../prisma/prisma.js";

test('Delete/ Deleta prontuario', async () => {
    const idprotuario = 32
    await prismaClient.protuario.delete({
        where: {
            id: idprotuario
        },
    })

    const res = await prismaClient.protuario.findUnique({
        where: {
            id: idprotuario
        }
    })
    expect(res).toBe(null)
});
