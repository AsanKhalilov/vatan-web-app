import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(Review)
        private readonly reviewRepository: Repository<Review>,
    ) { }

    async findAll(): Promise<Review[]> {
        return await this.reviewRepository.find();
    }

    async findOne(id: number): Promise<Review> {
        return await this.reviewRepository.findOne({ where: { id } });
    }

    async create(createReviewDto: CreateReviewDto): Promise<Review> {
        const review = this.reviewRepository.create({
            ...createReviewDto,
            user: { id: createReviewDto.userId },
            attraction: { id: createReviewDto.attractionId },
        });
        return await this.reviewRepository.save(review);
    }

    async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review> {
        await this.reviewRepository.update(id, updateReviewDto);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.reviewRepository.delete(id);
    }
}
