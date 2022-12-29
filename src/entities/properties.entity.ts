import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedule } from "./schedules_user_properties.entity";

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

    @OneToOne(()=> Address, (address) => address.property)
    @JoinColumn({ name: "address" })
    address: Address

    @ManyToOne(() => Categories, (category) => category.properties)
    @JoinColumn({ name: "category" })
    category: Categories

    @OneToMany(() => Schedule, (schedule) => schedule.property)
    schedules: Schedule[]
}

export { Properties }