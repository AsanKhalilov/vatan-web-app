import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Attraction } from '../attraction/attraction.entity';

@Entity()
export class Visit {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Attraction)
    attraction: Attraction;

    @Column()
    status: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}