import { prismaClient } from "../../prisma/prisma";

test('Get/ retorna usuarios', async () => {
    const usuarios = await prismaClient.usuario.findMany();
    expect(Array.isArray(usuarios)).toBe(true)
});
