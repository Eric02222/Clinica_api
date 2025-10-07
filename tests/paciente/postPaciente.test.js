import { prismaClient } from "../../prisma/prisma.js";

test('Post/ Cria paciente', async () => {
    const data = {
        nome: "teste",
        cpf: "932.521.271-65",
        telefone: 99967562,
        email: "teste@gmail.com",
        data_nascimento: "2023-08-25T00:00:00.000Z",
        responsavel: "",
        sexo: "Masculino"
    }

    const paciente = await prismaClient.paciente.create({
        data: data
    });

    await prismaClient.paciente.delete({
        where: {
            id: Number(paciente.id),
        }
    });

    expect(paciente).toMatchObject(paciente)
});
