/*
  Warnings:

  - Added the required column `lamthebest` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `lamthebest` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
