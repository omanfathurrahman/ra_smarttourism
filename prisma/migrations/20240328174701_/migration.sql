/*
  Warnings:

  - You are about to drop the `Post_dokumentation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post_dokumentation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Post_documentation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "img_url" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    CONSTRAINT "Post_documentation_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
