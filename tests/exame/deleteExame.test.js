import { prismaClient } from "../../prisma/prisma.js";

test('Delete/ deleta exame', async () => {
    const idExame = 37;
    await prismaClient.exame.delete({
        where: {
            id: idExame
        }
    });

    const res = await prismaClient.exame.findUnique({
        where: {
            id: idExame
        }
    });

    
    expect(res).toBe(null)
});
