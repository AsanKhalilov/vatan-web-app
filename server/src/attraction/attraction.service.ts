import { Injectable } from '@nestjs/common';
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

    async findAll(): Promise<Attraction[]> {
        return await this.attractionRepository.find();
    }

    async findOne(id: number): Promise<Attraction> {
        return await this.attractionRepository.findOne({ where: { id } });
    }

    async create(createAttractionDto: CreateAttractionDto): Promise<Attraction> {
        const attraction = this.attractionRepository.create(createAttractionDto);
        return await this.attractionRepository.save(attraction);
    }

    async update(id: number, updateAttractionDto: UpdateAttractionDto): Promise<Attraction> {
        await this.attractionRepository.update(id, updateAttractionDto);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.attractionRepository.delete(id);
    }
}
