import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna exame', async () => {
    await prismaClient.consulta.delete({
        where: {
            id: 197
        }
    });

    const consulta = await prismaClient.consulta.findUnique({
        where: {
            id: 197
        }
    });
    
    expect(consulta).toBe(null)
});
