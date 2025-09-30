import { prismaClient } from "../prisma/prisma";

test('Get/ retorna usuarios', async () => {
    const usuarios = await prismaClient.usuario.findMany();
    expect(Array.isArray(usuarios)).toBe(true)
});


test('Get/ usuario especifico', async () => {
    const res = await prismaClient.usuario.findUnique({
        where: {
            id: 147
        }
    })
    expect(res.nome).toBe("Jorge santos");
})


test('Post/ usuarios', async () => {
    const novoUsuario = {
        nome: "João Santo DIas aqwe",
        email: "Santo@gmail.com",
        senha: "123",
        cargo: "Médico"
    }

    const usuario = await prismaClient.usuario.create({
        data: {
            nome: novoUsuario.nome,
            cargo: novoUsuario.cargo,
            email: novoUsuario.email,
            senha: novoUsuario.senha
        },
    })

    await prismaClient.usuario.delete({
        where: {
            id: Number(usuario.id),
        },
    })

    expect(usuario.email).toBe("Santo@gmail.com")
});

test('Put/ atualizar usuario', async () => {
    const idUser = 178
    await prismaClient.usuario.update({
        where: { id: idUser },
        data: {
            nome: "João Santos henrique",
            email: "SantoH@gmail.com",
            senha: "123",
            cargo: "Médico"
        },
    })

    const res = await prismaClient.usuario.findUnique({
        where: {
            id: idUser
        }
    })

    expect(res.email).toBe("SantoH@gmail.com");
});

// test('PATCH/ atualizar email Usuario', async () => {
//     const res = await fetch(`${apiUrl}/usuarios/67`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             email: "asd2@gmail.com",
//         }),
//     })
//     const data = await res.json()
//     expect(data.data.email).toBe("asd2@gmail.com");
// });


test('DELETE/ deletar usuario especifico', async () => {
    const idUser = 71

    await prismaClient.usuario.delete({
        where: {
            id: idUser,
        },
    })

    const res = await prismaClient.usuario.findUnique({
        where: {
            id: idUser
        }
    })
    expect(res).toBe(null);
});



test("Fluxo completo de usuário", async () => {
    // cria
    const novoUsuario = {
        nome: "teste",
        email: "teste@gmail.com",
        senha: "123",
        cargo: "Médico"
    }

    const usuario = await prismaClient.usuario.create({
        data: {
            nome: novoUsuario.nome,
            cargo: novoUsuario.cargo,
            email: novoUsuario.email,
            senha: novoUsuario.senha
        },
    })

    // let res = await fetch(`${apiUrl}/usuarios`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //         nome: "teste",
    //         email: "teste@gmail.com",
    //         senha: "123",
    //         cargo: "Médico"
    //     }),
    // });
    // let user = await res.json();

    // pega
    const res = await prismaClient.usuario.findUnique({
        where: {
            id: usuario.id
        }
    })

    // res = await fetch(`${apiUrl}/usuarios/${user.id}`);
    // let data = await res.json();
    // expect(data).toHaveProperty("nome", "teste");

    // deleta
    await prismaClient.usuario.delete({
        where: {
            id: usuario.id,
        },
    })

    const resDelete = await prismaClient.usuario.findUnique({
        where: {
            id: usuario.id
        }
    })

    // await fetch(`${apiUrl}/usuarios/${user.id}`, { method: "DELETE" });
    // res = await fetch(`${apiUrl}/usuarios/${user.id}`);
    expect(resDelete).toBe(null);
});
