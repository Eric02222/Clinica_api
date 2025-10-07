import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna exame', async () => {
    const data = {
        motivo: "Dor nas costas",
        data_consulta: "2023-08-25T00:00:00.000Z",
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
    }

    const consulta = await prismaClient.consulta.create({
        data: data
    });

    await prismaClient.consulta.delete({
        where: {
            id: consulta.id
        }
    });
    
    expect(consulta).toMatchObject(consulta)
});
