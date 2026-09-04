-- CreateTable
CREATE TABLE "expire_period" (
    "id" SERIAL NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "expire_period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sharelink" (
    "uuid" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "expire_period" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creator_id" TEXT NOT NULL,

    CONSTRAINT "sharelink_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "sharelink_key_key" ON "sharelink"("key");

-- AddForeignKey
ALTER TABLE "sharelink" ADD CONSTRAINT "sharelink_expire_period_fkey" FOREIGN KEY ("expire_period") REFERENCES "expire_period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
