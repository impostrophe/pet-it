/*
  Warnings:

  - You are about to drop the column `gptId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_gptId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "gptId";
