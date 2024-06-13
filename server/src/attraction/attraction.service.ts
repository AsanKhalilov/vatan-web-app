import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attraction } from './attraction.entity';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';

@Injectable()
export class AttractionService {
    constructor(
        @InjectRepository(Attraction)
        private readonly attractionRepository: Repository<Attraction>,
    ) { }

    async create(createAttractionDto: CreateAttractionDto): Promise<Attraction> {
        const attraction = this.attractionRepository.create(createAttractionDto);
        return this.attractionRepository.save(attraction);
    }

    async findAll(): Promise<Attraction[]> {
        return this.attractionRepository.find();
    }

    async findOne(id: number): Promise<Attraction> {
        const attraction = await this.attractionRepository.findOne({ where: { id } });
        if (!attraction) {
            throw new NotFoundException(`Attraction with ID ${id} not found`);
        }
        return attraction;
    }

    async update(id: number, updateAttractionDto: UpdateAttractionDto): Promise<Attraction> {
        await this.attractionRepository.update(id, updateAttractionDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        const result = await this.attractionRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Attraction with ID ${id} not found`);
        }
    }
}
