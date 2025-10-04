-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Scan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "codeId" INTEGER NOT NULL,
    "pointsGained" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Scan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Scan_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "Qrcode" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Scan" ("codeId", "createdAt", "id", "pointsGained", "userId") SELECT "codeId", "createdAt", "id", "pointsGained", "userId" FROM "Scan";
DROP TABLE "Scan";
ALTER TABLE "new_Scan" RENAME TO "Scan";
CREATE UNIQUE INDEX "Scan_userId_codeId_key" ON "Scan"("userId", "codeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
