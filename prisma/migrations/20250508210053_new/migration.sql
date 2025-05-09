-- CreateTable
CREATE TABLE `payment` (
    `id` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `applyment_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_applyment_id_fkey` FOREIGN KEY (`applyment_id`) REFERENCES `applyment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
