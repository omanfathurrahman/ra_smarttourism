/*
  Warnings:

  - Added the required column `img_url` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_url` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "content", "id", "published", "title", "userId") SELECT "authorId", "content", "id", "published", "title", "userId" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_Member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "show" BOOLEAN NOT NULL DEFAULT false,
    "start_date" DATETIME,
    "end_date" DATETIME,
    "position" TEXT NOT NULL,
    "part" TEXT NOT NULL
);
INSERT INTO "new_Member" ("email", "end_date", "id", "name", "part", "position", "show", "start_date") SELECT "email", "end_date", "id", "name", "part", "position", "show", "start_date" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
