import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Attraction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column()
    location: string;

    @Column()
    category: string;

    @Column('numeric')
    rating: number;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}