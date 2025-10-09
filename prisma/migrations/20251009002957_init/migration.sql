-- AlterTable
ALTER TABLE "public"."consulta" ALTER COLUMN "data_consulta" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."protuario" ALTER COLUMN "data" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."token" ADD COLUMN     "revoked" BOOLEAN NOT NULL DEFAULT false;
