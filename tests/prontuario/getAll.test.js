import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna usuarios', async () => {
    const protuarios = await prismaClient.protuario.findMany();
    expect(Array.isArray(protuarios)).toBe(true)
});
