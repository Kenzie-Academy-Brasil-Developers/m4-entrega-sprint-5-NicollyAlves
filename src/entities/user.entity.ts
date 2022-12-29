import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, CreateDateColumn, 
    UpdateDateColumn, 
    BeforeInsert, 
    BeforeUpdate,
    ManyToMany,
    JoinTable,
    OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs"
import { Schedule } from "./schedules_user_properties.entity";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ default: true})
    isAdm: boolean

    @Column({ default: true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Schedule[]
}

export { User }