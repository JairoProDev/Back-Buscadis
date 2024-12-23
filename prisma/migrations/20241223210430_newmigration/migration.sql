/*
  Warnings:

  - You are about to drop the `Adiso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comentario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Imagen` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mensaje` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaccion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Valoracion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Adiso" DROP CONSTRAINT "Adiso_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "Adiso" DROP CONSTRAINT "Adiso_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Categoria" DROP CONSTRAINT "Categoria_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_adisoId_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Imagen" DROP CONSTRAINT "Imagen_adisoId_fkey";

-- DropForeignKey
ALTER TABLE "Mensaje" DROP CONSTRAINT "Mensaje_destinatarioId_fkey";

-- DropForeignKey
ALTER TABLE "Mensaje" DROP CONSTRAINT "Mensaje_remitenteId_fkey";

-- DropForeignKey
ALTER TABLE "Transaccion" DROP CONSTRAINT "Transaccion_compradorId_fkey";

-- DropForeignKey
ALTER TABLE "Transaccion" DROP CONSTRAINT "Transaccion_vendedorId_fkey";

-- DropForeignKey
ALTER TABLE "Valoracion" DROP CONSTRAINT "Valoracion_evaluadorId_fkey";

-- DropForeignKey
ALTER TABLE "Valoracion" DROP CONSTRAINT "Valoracion_usuarioId_fkey";

-- DropTable
DROP TABLE "Adiso";

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "Comentario";

-- DropTable
DROP TABLE "Imagen";

-- DropTable
DROP TABLE "Mensaje";

-- DropTable
DROP TABLE "Transaccion";

-- DropTable
DROP TABLE "Valoracion";
