CREATE TABLE IF NOT EXISTS "usersTable" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"imageLink" varchar(255) NOT NULL
);
