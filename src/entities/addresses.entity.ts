import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";

@Entity("addresses")
class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column()
    number: string

    @Column()
    city: string

    @Column()
    state: string

    @OneToOne(() => Properties, (properties) => properties.address)
    property: Properties
}

export { Address }