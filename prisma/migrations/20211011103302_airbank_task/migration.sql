/*
  Warnings:

  - The `id` column on the `Transactions` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Transactions_id_key";

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id");
