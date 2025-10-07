import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna exame', async () => {

    const consulta = await prismaClient.consulta.create({
        data: {
            motivo: "Dor nas costas",
            data_consulta: "2023-08-25T00:00:00.000Z",
            observacoes: "Ibuprofeno 3 vezes ao dia",
            medico_responsavel_id: 1,
            paciente_id: 1
        }
    });

    const res = await prismaClient.consulta.findUnique({
        where: {
            id: consulta.id
        }
    });

    await prismaClient.consulta.delete({
        where: {
            id: consulta.id
        }
    });

    const resDelete = await prismaClient.consulta.findUnique({
        where: {
            id: consulta.id
        }
    });


    expect(resDelete).toBe(null)
});
