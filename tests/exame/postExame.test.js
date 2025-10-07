import { prismaClient } from "../../prisma/prisma.js";

test('Porst/ Cria exame', async () => {
    const data = {
        tipo_exame: "teste",
        resultado: "teste",
        data_exame: "2023-08-25T00:00:00.000Z",
        link_arquivo: "imagina que e um link",
        observacoes: "qualquer coisa ",
        paciente_id: 1
    }
    const exame = await prismaClient.exame.create({
        data: data
    });

    await prismaClient.exame.delete({
        where: {
            id: exame.id
        }
    });
    
    expect(exame).toMatchObject(exame)
});
