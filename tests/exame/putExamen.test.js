import { prismaClient } from "../../prisma/prisma.js";

test('Put/ Atualiza exame', async () => {
    const exame = await prismaClient.exame.update({
        where: {
            id: 35
        },
        data: {
            tipo_exame: "teste 232123",
            resultado: "teste positivo 23",
            data_exame: "2023-08-25T00:00:00.000Z",
            link_arquivo: "imagina que e um link",
            observacoes: "qualquer coisa ",
            paciente_id: 1
        }
    });

    expect(exame.resultado).toBe("teste positivo 23")
});
