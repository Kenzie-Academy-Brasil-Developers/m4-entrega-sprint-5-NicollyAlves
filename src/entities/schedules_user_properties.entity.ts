import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
class UserProperties {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "date" })
    date: string

    @Column({ type: "time" })
    hour: string

    @ManyToOne(() => Properties, (properties) => properties.id)
    property: Properties

    @ManyToOne(() => User, (users) => users.id)
    user: User
}

export { UserProperties }