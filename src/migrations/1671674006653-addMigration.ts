import { MigrationInterface, QueryRunner } from "typeorm";

export class addMigration1671674006653 implements MigrationInterface {
    name = 'addMigration1671674006653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "REL_2b2211958ef1f0e3c680339100"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "address" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "UQ_9e4d0fcf41a4299f61054c12490" UNIQUE ("address")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "category" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_9e4d0fcf41a4299f61054c12490" FOREIGN KEY ("address") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_788ff519ace064755e87fa90ee7" FOREIGN KEY ("category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_788ff519ace064755e87fa90ee7"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_9e4d0fcf41a4299f61054c12490"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "UQ_9e4d0fcf41a4299f61054c12490"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "REL_2b2211958ef1f0e3c680339100" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
