import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna exame', async () => {
    const exames = await prismaClient.exame.findMany();
    
    expect(Array.isArray(exames)).toBe(true)
});
