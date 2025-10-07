import { prismaClient } from "../../prisma/prisma.js";

test('Delete/ deleta paciente', async () => {
    const idPaciente = 21

    await prismaClient.paciente.delete({
        where: { id: idPaciente}
    })

    const pacientes = await prismaClient.paciente.findUnique({
        where: {
            id: idPaciente
        }
    });

    expect(pacientes).toBe(null)
});
