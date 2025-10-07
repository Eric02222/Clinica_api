import { prismaClient } from "../../prisma/prisma";

test('Put/ atualiza Prontuario', async () => {
    const idUser = 36
    const res = await prismaClient.protuario.update({
        where: {
            id: idUser
        },
        data: {         
                descricao: "algo rolo de ruim no seu rim",
                data: "2025-08-25T00:00:00.000Z",
                medico_responsavel_id: 1,
                paciente_id: 1
        }
    });

    expect(res.descricao).toBe("algo rolo de ruim no seu rim")
})