import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Attraction } from '../attraction/attraction.entity';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Attraction)
    attraction: Attraction;

    @Column('numeric')
    rating: number;

    @Column('text')
    comment: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}