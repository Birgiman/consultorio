/*
  Warnings:

  - Added the required column `local_birth` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "local_birth" TEXT NOT NULL;
