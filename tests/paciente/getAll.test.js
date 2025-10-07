import { prismaClient } from "../../prisma/prisma.js";

test('Get/ retorna pacientes', async () => {
    const pacientes = await prismaClient.paciente.findMany();
    expect(Array.isArray(pacientes)).toBe(true)
});
