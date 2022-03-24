-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_storeId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `resetPasswordExpires` INTEGER NULL,
    MODIFY `resetPasswordToken` VARCHAR(191) NULL,
    MODIFY `storeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
