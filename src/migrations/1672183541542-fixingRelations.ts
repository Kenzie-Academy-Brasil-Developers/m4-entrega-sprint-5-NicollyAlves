import { MigrationInterface, QueryRunner } from "typeorm";

export class fixingRelations1672183541542 implements MigrationInterface {
    name = 'fixingRelations1672183541542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_82951fd70633bcdad2385feb908"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "schedules"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ADD "schedules" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_82951fd70633bcdad2385feb908" FOREIGN KEY ("schedules") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
