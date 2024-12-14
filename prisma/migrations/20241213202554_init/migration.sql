-- CreateTable
CREATE TABLE "Adiso" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "precio" DOUBLE PRECISION,
    "contacto" TEXT NOT NULL,
    "ubicacion" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Adiso_pkey" PRIMARY KEY ("id")
);
