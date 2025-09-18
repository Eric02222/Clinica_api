import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.createMany({
    data: [
      {
        nome: "Joao",
        email: "joao412114@email.com",
        senha: "123",
        cargo: "Médico"
      }
    ],
  });

  // await prisma.paciente.create({
  //   data: {
  //     nome: "João",
  //     sexo: "Masculino",
  //     data_nascimento: new Date("1980-12-11"),
  //     cpf: "958.521.251.65",
  //     telefone: 952556232,
  //     email: "joao@email.com",
  //   },
  // });


  //   await prisma.consulta.createMany({
  //     data: [
  //       {
  //         motivo: "Dor nas costas",
  //         data_consulta: new Date("2023-08-25"),
  //         observacoes: "Ibuprofeno 3 vezes ao dia",
  //         medico_responsavel_id: 1,
  //         paciente_id: 1
  //       },
  //     ]
  //   });


  //   await prisma.Exame.createMany({
  //     data: [
  //       {
  //         tipo_exame: "sangue",
  //         resultado:  "ta",
  //         data_exame: new Date("2023-08-25"),
  //         link_arquivo: "imagina que e um link",
  //         observacoes: "qualquer coisa ",
  //         paciente_id: 1
  //       },
 
  //     ]
  //   });

  // wait prisma.Protuario.createMany({
  //     data: [
  //       {
  //         descricao: "algo rolo de ruim",
  //         data: new Date("2023-08-25"),
  //         medico_responsavel_id: 1,
  //         paciente_id: 1
  //       },

  //     ]
  //   });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

