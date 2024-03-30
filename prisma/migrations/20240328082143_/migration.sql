-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "img_url" TEXT,
    "category" TEXT,
    "client" TEXT,
    "hki_paten" TEXT,
    "website_link" TEXT,
    "description" TEXT NOT NULL,
    "what_we_did_desc" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("category", "client", "description", "hki_paten", "id", "img_url", "published", "title", "userId", "website_link", "what_we_did_desc") SELECT "category", "client", "description", "hki_paten", "id", "img_url", "published", "title", "userId", "website_link", "what_we_did_desc" FROM "Post";
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
    "part" TEXT NOT NULL DEFAULT 'Member'
);
INSERT INTO "new_Member" ("email", "end_date", "id", "img_url", "name", "part", "position", "show", "start_date") SELECT "email", "end_date", "id", "img_url", "name", "part", "position", "show", "start_date" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
