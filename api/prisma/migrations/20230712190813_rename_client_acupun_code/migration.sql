/*
  Warnings:

  - Changed the type of `acupun_code` on the `clients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "client_acupun_code" AS ENUM ('SESSAO', 'ELETRICA');

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "acupun_code",
ADD COLUMN     "acupun_code" "client_acupun_code" NOT NULL;

-- DropEnum
DROP TYPE "ClientAcupunCode";
