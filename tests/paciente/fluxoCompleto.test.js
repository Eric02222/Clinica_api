import { prismaClient } from "../../prisma/prisma.js";

test('Fluxo completo de paciente', async () => {
    const pacientes = await prismaClient.paciente.create({
        data: {
            nome: "teste",
            cpf: "932.521.271-65",
            telefone: 99967562,
            email: "teste@gmail.com",
            data_nascimento: "2023-08-25T00:00:00.000Z",
            responsavel: "",
            sexo: "Masculino"
        }
    });


    const res = await prismaClient.paciente.findUnique({
        where: {
            id: pacientes.id
        }
    });

    await prismaClient.paciente.delete({
        where: {
            id: pacientes.id
        }
    });

    const resDelete = await prismaClient.paciente.findUnique({
        where: {
            id: pacientes.id
        }
    });
    expect(resDelete).toBe(null)
});
