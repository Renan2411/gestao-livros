-- CreateTable
CREATE TABLE "Autores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "biografia" TEXT,
    "nacionalidade" TEXT
);

-- CreateTable
CREATE TABLE "Livros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "dataPublicacao" DATETIME NOT NULL,
    "isbn" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "autorId" INTEGER NOT NULL,
    CONSTRAINT "Livros_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Livros_isbn_key" ON "Livros"("isbn");
