import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna exame', async () => {
const consulta = await prismaClient.consulta.update({
        where: {
            id: 198
        },
        data: {
            motivo: "teste",
            data_consulta: "2023-08-25T00:00:00.000Z",
            observacoes: "Ibuprofeno 3 vezes ao dia",
            medico_responsavel_id: 1,
            paciente_id: 1
        }
    });


    expect(consulta.motivo).toBe("teste")
});
