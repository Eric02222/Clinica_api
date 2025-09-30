import { prismaClient } from "../../prisma/prisma";

test('DELETE/ deletar usuario especifico', async () => {
    const idUser = 71

    await prismaClient.usuario.delete({
        where: {
            id: idUser,
        },
    })

    const res = await prismaClient.usuario.findUnique({
        where: {
            id: idUser
        }
    })
    expect(res).toBe(null);
});
