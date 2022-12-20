import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { UserProperties } from "./schedules_user_properties.entity";

@Entity("properties")
class Properties {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: false })
    sold: boolean

    @Column()
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(()=> Address)
    @JoinColumn()
    address: Address

    @OneToMany(() => Categories, (category) => category.properties)
    category: Categories

    @ManyToMany(() => UserProperties, (userProperties) => userProperties.property)
    @JoinTable()
    schedules: UserProperties[]

}

export { Properties }