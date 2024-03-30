-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'research',
    "img_url" TEXT,
    "category" TEXT,
    "client" TEXT,
    "hki_paten" TEXT,
    "website_link" TEXT,
    "what_we_did_desc" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("category", "client", "description", "hki_paten", "id", "img_url", "published", "title", "userId", "website_link", "what_we_did_desc") SELECT "category", "client", "description", "hki_paten", "id", "img_url", "published", "title", "userId", "website_link", "what_we_did_desc" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
