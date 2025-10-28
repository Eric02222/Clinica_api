/*
  Warnings:

  - You are about to drop the `protuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."protuario" DROP CONSTRAINT "protuario_medico_responsavel_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."protuario" DROP CONSTRAINT "protuario_paciente_id_fkey";

-- DropTable
DROP TABLE "public"."protuario";

-- CreateTable
CREATE TABLE "public"."prontuario" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3),
    "medico_responsavel_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "prontuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."prontuario" ADD CONSTRAINT "prontuario_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "public"."paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prontuario" ADD CONSTRAINT "prontuario_medico_responsavel_id_fkey" FOREIGN KEY ("medico_responsavel_id") REFERENCES "public"."usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
