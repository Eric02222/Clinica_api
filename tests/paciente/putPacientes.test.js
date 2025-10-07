import { prismaClient } from "../../prisma/prisma.js";

test('put/ atualiza paciente', async () => {
    const pacientes = await prismaClient.paciente.update({
        where: {id: 19}, 
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
    
    expect(pacientes.email).toBe("teste@gmail.com")
});