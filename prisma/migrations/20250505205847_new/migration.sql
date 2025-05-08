/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `applyment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `applyment_number_key` ON `applyment`(`number`);
