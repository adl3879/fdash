/*
  Warnings:

  - You are about to drop the column `storeId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[domain]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_storeId_fkey`;

-- AlterTable
ALTER TABLE `store` ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `storeId`;

-- CreateIndex
CREATE UNIQUE INDEX `Store_domain_key` ON `Store`(`domain`);

-- CreateIndex
CREATE UNIQUE INDEX `Store_userId_key` ON `Store`(`userId`);

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
