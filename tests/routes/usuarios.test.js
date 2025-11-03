import bcrypt from "bcrypt";
import request from "supertest";
import { app } from "../../src/app";
import { prismaClient } from "../../prisma/prisma";

async function clearDatabase() {
    await prismaClient.prontuario.deleteMany({});
    await prismaClient.consulta.deleteMany({});
    await prismaClient.exame.deleteMany({});
    await prismaClient.paciente.deleteMany({});
    await prismaClient.token.deleteMany({});
    await prismaClient.usuario.deleteMany({});
}

describe("Testes de Integração para /usuarios", () => {
    let token;

    beforeEach(async () => {
        await clearDatabase();

        const hashedPassword = await bcrypt.hash("123", 10);

        await prismaClient.usuario.create({
            data: {
                nome: "Usuario de Teste Integrado",
                email: "integrado@teste.com",
                senha: hashedPassword,
                cargo: "medico",
            },
        });

        const userResponse = await request(app)
            .post("/auth/login")
            .send({ email: "integrado@teste.com", senha: "123" })
            .expect(200);

        token = userResponse.body.accessToken;
    });

    afterAll(async () => {
        await clearDatabase();
        await prismaClient.$disconnect();
    });

    test("GET /usuarios - Deve retornar a lista de usuários do banco", async () => {
        const response = await request(app)
            .get("/usuarios")
            .set("Authorization", `Bearer ${token}`)
            .expect("Content-Type", /json/);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(1);
        expect(response.body[0].nome).toBe("Usuario de Teste Integrado");
        expect(response.body[0].email).toBe("integrado@teste.com");
    });

    test("GET /usuarios - Deve retornar um array vazio se não houver usuários", async () => {
        await clearDatabase();

        const response = await request(app)
            .get("/usuarios")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });


    test('GET /usuarios /:email - Deve retornar a um usuário especifico do banco', async () => {
        // O supertest req dados da app
        const response = await request(app)
         .get("/usuarios/byemail/integrado@teste.com")
         .set("Authorization", `Bearer ${token}`)
         .expect("Content-Type", /json/);


        // deu boa?
        expect(response.status).toBe(200);

        // O corpo da resposta é um array?
        expect(Array.isArray(response.body)).toBe(true);

        // O array contém o usuário que criamos?
        expect(response.body.length).toBe(1);
        expect(response.body[0].nome).toBe('Usuario de Teste Integrado');
        expect(response.body[0].email).toBe('integrado@teste.com');
    });


    test('POST /usuarios - Deve criar um usuários no banco', async () => {
        // limpar as que dependem do usuário

        await clearDatabase();

        // seed pra test
        await prismaClient.usuario.create({
            data: {
                nome: 'Usuario de Teste Integrado Post',
                email: 'integradoPost@teste.com',
                senha: '123',
                cargo: 'medico',
            },
        });


        // O supertest req dados da app
        const response = await request(app)
         .get("/usuarios")
         .set("Authorization", `Bearer ${token}`)
         .expect("Content-Type", /json/);


        // deu boa?
        expect(response.status).toBe(200);

        // O corpo da resposta é um array?
        expect(Array.isArray(response.body)).toBe(true);

        // O array contém o usuário que criamos?
        expect(response.body.length).toBe(1);
        expect(response.body[0].nome).toBe('Usuario de Teste Integrado Post');
        expect(response.body[0].email).toBe('integradoPost@teste.com');
    });

    test('PUT /usuarios /:id - Deve atualizar um usuários no banco', async () => {
        // seed pra test
        await prismaClient.usuario.update({
            where: { email: "integrado@teste.com" },
            data: {
                nome: 'Usuario de Teste Integrado PUT Atualizado',
                email: 'integradoPUT@teste.com',
                senha: '123',
                cargo: 'medico',
            },
        });


        // O supertest req dados da app
        const response = await request(app)
         .get("/usuarios/byemail/integradoPUT@teste.com")
         .set("Authorization", `Bearer ${token}`)
         .expect("Content-Type", /json/);


        // deu boa?
        expect(response.status).toBe(200);

        // O corpo da resposta é um array?
        expect(Array.isArray(response.body)).toBe(true);

        // O array contém o usuário que criamos?
        expect(response.body.length).toBe(1);
        expect(response.body[0].nome).toBe('Usuario de Teste Integrado Post');
        expect(response.body[0].email).toBe('integradoPost@teste.com');
    });

    test('DELETE /usuarios /:id - Deve deletar um usuários no banco', async () => {

        // 3. "pai"
        await prismaClient.usuario.delete({where: {email: "integrado@teste.com"}});

        // O supertest req dados da app
        const response = await request(app)
         .get("/usuarios/byemail/integrado@teste.com")
         .set("Authorization", `Bearer ${token}`)
         .expect("Content-Type", /json/);

        // deu boa?
        expect(response.status).toBe(400);

        // O corpo da resposta é um array?
        expect(Array.isArray(response.body)).toBe(true);

        // O array contém o usuário que criamos?
        expect(response.body.length).toBe(1);
        expect(response.body[0].nome).toBe('Usuario de Teste Integrado Post');
        expect(response.body[0].email).toBe('integradoPost@teste.com');
    });


});