import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna exame', async () => {
    const consulta = await prismaClient.consulta.findUnique({
        where: {
            id: 16
        }
    });
    
    expect(consulta.motivo).toBe("Dor nas costas")
});
