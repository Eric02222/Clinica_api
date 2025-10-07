import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna exame', async () => {
    const consultas = await prismaClient.consulta.findMany();
    
    expect(Array.isArray(exames)).toBe(true)
});
