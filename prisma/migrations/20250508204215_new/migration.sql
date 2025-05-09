/*
  Warnings:

  - Added the required column `status` to the `applyment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `applyment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `applyment` ADD COLUMN `crateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;
