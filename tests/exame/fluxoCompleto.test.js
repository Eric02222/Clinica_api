import { prismaClient } from "../../prisma/prisma.js";

test('Fluxo completo de exame', async () => {
    const exame = await prismaClient.exame.create({
        data: {
            tipo_exame: "teste",
            resultado: "teste",
            data_exame: "2023-08-25T00:00:00.000Z",
            link_arquivo: "imagina que e um link",
            observacoes: "qualquer coisa ",
            paciente_id: 1
        }
    });

    const res = await prismaClient.exame.findUnique({
        where: {
            id: exame.id
        }
    });

    await prismaClient.exame.delete({
        where: {
            id: exame.id
        }
    });


    const resDelete = await prismaClient.exame.findUnique({
        where: {
            id: exame.id
        }
    });


    expect(resDelete).toBe(null)
});
