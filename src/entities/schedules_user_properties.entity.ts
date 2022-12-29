import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules")
class Schedule {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "date" })
    date: string

    @Column({ type: "time" })
    hour: string

    @ManyToOne(() => Properties, (properties) => properties.schedules)
    @JoinColumn({ name: "propertyId"})
    property: Properties
    
    @ManyToOne(() => User, (users) => users.schedules)
    @JoinColumn({ name: "userId" })
    user: User

}

export { Schedule }