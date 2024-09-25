CREATE TABLE IF NOT EXISTS "hp_session" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" serial NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hp_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"username" text,
	"password" text,
	"salt" text,
	CONSTRAINT "hp_user_username_unique" UNIQUE("username")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hp_session" ADD CONSTRAINT "hp_session_userId_hp_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."hp_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "sessions_user_id_idx" ON "hp_session" USING btree ("userId");