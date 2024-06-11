import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) { }

    @Get()
    async findAll() {
        return await this.reviewService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.reviewService.findOne(id);
    }

    @Post()
    async create(@Body() createReviewDto: CreateReviewDto) {
        return await this.reviewService.create(createReviewDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateReviewDto: UpdateReviewDto) {
        return await this.reviewService.update(id, updateReviewDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.reviewService.delete(id);
    }
}
