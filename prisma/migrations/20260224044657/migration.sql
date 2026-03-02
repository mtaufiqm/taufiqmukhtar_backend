-- CreateTable
CREATE TABLE "user" (
    "uuid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "user_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "roles" (
    "description" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("description")
);

-- CreateTable
CREATE TABLE "user_roles_bridge" (
    "username" TEXT NOT NULL,
    "roles" TEXT NOT NULL,

    CONSTRAINT "user_roles_bridge_pkey" PRIMARY KEY ("username","roles")
);

-- CreateTable
CREATE TABLE "permission" (
    "description" TEXT NOT NULL,

    CONSTRAINT "permission_pkey" PRIMARY KEY ("description")
);

-- CreateTable
CREATE TABLE "roles_permission_bridge" (
    "roles" TEXT NOT NULL,
    "permission" TEXT NOT NULL,

    CONSTRAINT "roles_permission_bridge_pkey" PRIMARY KEY ("roles","permission")
);

-- CreateTable
CREATE TABLE "content" (
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "content_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "content_type" (
    "uuid" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "content_type_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "content_type_bridge" (
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "content_type_bridge_pkey" PRIMARY KEY ("content","type")
);

-- CreateTable
CREATE TABLE "reaction_type" (
    "uuid" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "reaction_type_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "content_reaction_bridge" (
    "uuid" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "reaction" TEXT NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "content_reaction_bridge_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "comment" (
    "uuid" TEXT NOT NULL,
    "name" TEXT,
    "body" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "comment_reaction_bridge" (
    "uuid" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "reaction" TEXT NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_reaction_bridge_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "message_type" (
    "uuid" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "message_type_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "message" (
    "uuid" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "message_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "roles_description_key" ON "roles"("description");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_bridge_username_roles_key" ON "user_roles_bridge"("username", "roles");

-- CreateIndex
CREATE UNIQUE INDEX "roles_permission_bridge_roles_permission_key" ON "roles_permission_bridge"("roles", "permission");

-- CreateIndex
CREATE UNIQUE INDEX "content_type_description_key" ON "content_type"("description");

-- CreateIndex
CREATE UNIQUE INDEX "content_type_bridge_content_type_key" ON "content_type_bridge"("content", "type");

-- CreateIndex
CREATE UNIQUE INDEX "message_type_description_key" ON "message_type"("description");

-- AddForeignKey
ALTER TABLE "user_roles_bridge" ADD CONSTRAINT "user_roles_bridge_username_fkey" FOREIGN KEY ("username") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles_bridge" ADD CONSTRAINT "user_roles_bridge_roles_fkey" FOREIGN KEY ("roles") REFERENCES "roles"("description") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_type_bridge" ADD CONSTRAINT "content_type_bridge_content_fkey" FOREIGN KEY ("content") REFERENCES "content"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_type_bridge" ADD CONSTRAINT "content_type_bridge_type_fkey" FOREIGN KEY ("type") REFERENCES "content_type"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_reaction_bridge" ADD CONSTRAINT "content_reaction_bridge_content_fkey" FOREIGN KEY ("content") REFERENCES "content"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_reaction_bridge" ADD CONSTRAINT "content_reaction_bridge_reaction_fkey" FOREIGN KEY ("reaction") REFERENCES "reaction_type"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_content_fkey" FOREIGN KEY ("content") REFERENCES "content"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_reaction_bridge" ADD CONSTRAINT "comment_reaction_bridge_comment_fkey" FOREIGN KEY ("comment") REFERENCES "comment"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_reaction_bridge" ADD CONSTRAINT "comment_reaction_bridge_reaction_fkey" FOREIGN KEY ("reaction") REFERENCES "reaction_type"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_type_fkey" FOREIGN KEY ("type") REFERENCES "message_type"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
