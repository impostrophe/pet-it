/*
  Warnings:

  - A unique constraint covering the columns `[petId]` on the table `Stat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Stat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stat" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Stat_petId_key" ON "Stat"("petId");
