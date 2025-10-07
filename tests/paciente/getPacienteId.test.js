import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna paciente especifico', async () => {
    const pacientes = await prismaClient.paciente.findUnique({
        where: {
            id: 8
        }
    });
    expect(pacientes.email).toBe("pa@gmail.com")
});
