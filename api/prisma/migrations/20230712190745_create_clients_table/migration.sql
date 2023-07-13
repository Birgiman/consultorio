-- CreateEnum
CREATE TYPE "ClientAcupunCode" AS ENUM ('SESSAO', 'ELETRICA');

-- CreateTable
CREATE TABLE "clients" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "cid" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "acupun_code" "ClientAcupunCode" NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_cpf_key" ON "clients"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
