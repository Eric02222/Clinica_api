import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna exame especifico', async () => {
    const exame = await prismaClient.exame.findUnique({
        where: {
            id: 8
        }
    });
    
    expect(exame.resultado).toBe("ta")
});
