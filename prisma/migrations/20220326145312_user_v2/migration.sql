/*
  Warnings:

  - You are about to alter the column `resetPasswordExpires` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedBigInt`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `resetPasswordExpires` BIGINT UNSIGNED NULL;
