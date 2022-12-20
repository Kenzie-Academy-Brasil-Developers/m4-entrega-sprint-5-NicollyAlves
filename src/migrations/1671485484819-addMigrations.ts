import { MigrationInterface, QueryRunner } from "typeorm";

export class addMigrations1671485484819 implements MigrationInterface {
    name = 'addMigrations1671485484819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_user_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_a5aea5dea185dc4f29bfa48fc5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_schedules_schedules_user_properties" ("usersId" uuid NOT NULL, "schedulesUserPropertiesId" uuid NOT NULL, CONSTRAINT "PK_51565a817026c35c0f75242bcf3" PRIMARY KEY ("usersId", "schedulesUserPropertiesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ac3ab444bac7ba67ac87afaaf9" ON "users_schedules_schedules_user_properties" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_25a71a0038ea598763cc443f68" ON "users_schedules_schedules_user_properties" ("schedulesUserPropertiesId") `);
        await queryRunner.query(`CREATE TABLE "properties_schedules_schedules_user_properties" ("propertiesId" uuid NOT NULL, "schedulesUserPropertiesId" uuid NOT NULL, CONSTRAINT "PK_e8a1aad8297581ce2e9043116a4" PRIMARY KEY ("propertiesId", "schedulesUserPropertiesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_64a15ba0227d436a39dcee3ac5" ON "properties_schedules_schedules_user_properties" ("propertiesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b1117cbd395709588842ba9dd2" ON "properties_schedules_schedules_user_properties" ("schedulesUserPropertiesId") `);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_235777864d81d2513cb8d6118f0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_schedules_schedules_user_properties" ADD CONSTRAINT "FK_ac3ab444bac7ba67ac87afaaf97" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_schedules_schedules_user_properties" ADD CONSTRAINT "FK_25a71a0038ea598763cc443f68e" FOREIGN KEY ("schedulesUserPropertiesId") REFERENCES "schedules_user_properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties_schedules_schedules_user_properties" ADD CONSTRAINT "FK_64a15ba0227d436a39dcee3ac54" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "properties_schedules_schedules_user_properties" ADD CONSTRAINT "FK_b1117cbd395709588842ba9dd2c" FOREIGN KEY ("schedulesUserPropertiesId") REFERENCES "schedules_user_properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties_schedules_schedules_user_properties" DROP CONSTRAINT "FK_b1117cbd395709588842ba9dd2c"`);
        await queryRunner.query(`ALTER TABLE "properties_schedules_schedules_user_properties" DROP CONSTRAINT "FK_64a15ba0227d436a39dcee3ac54"`);
        await queryRunner.query(`ALTER TABLE "users_schedules_schedules_user_properties" DROP CONSTRAINT "FK_25a71a0038ea598763cc443f68e"`);
        await queryRunner.query(`ALTER TABLE "users_schedules_schedules_user_properties" DROP CONSTRAINT "FK_ac3ab444bac7ba67ac87afaaf97"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_235777864d81d2513cb8d6118f0"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b1117cbd395709588842ba9dd2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_64a15ba0227d436a39dcee3ac5"`);
        await queryRunner.query(`DROP TABLE "properties_schedules_schedules_user_properties"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_25a71a0038ea598763cc443f68"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ac3ab444bac7ba67ac87afaaf9"`);
        await queryRunner.query(`DROP TABLE "users_schedules_schedules_user_properties"`);
        await queryRunner.query(`DROP TABLE "schedules_user_properties"`);
    }

}
