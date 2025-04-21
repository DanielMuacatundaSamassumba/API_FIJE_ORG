/*
  Warnings:

  - Added the required column `permitions` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roles` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `permitions` JSON NOT NULL,
    ADD COLUMN `roles` JSON NOT NULL;
