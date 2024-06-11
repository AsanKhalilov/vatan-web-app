import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visit } from './visit.entity';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';

@Injectable()
export class VisitService {
    constructor(
        @InjectRepository(Visit)
        private readonly visitRepository: Repository<Visit>,
    ) { }

    async findAll(): Promise<Visit[]> {
        return await this.visitRepository.find();
    }

    async findOne(id: number): Promise<Visit> {
        return await this.visitRepository.findOne({ where: { id } });
    }

    async create(createVisitDto: CreateVisitDto): Promise<Visit> {
        const visit = this.visitRepository.create({
            ...createVisitDto,
            user: { id: createVisitDto.userId },
            attraction: { id: createVisitDto.attractionId },
        });
        return await this.visitRepository.save(visit);
    }

    async update(id: number, updateVisitDto: UpdateVisitDto): Promise<Visit> {
        await this.visitRepository.update(id, updateVisitDto);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.visitRepository.delete(id);
    }
}
