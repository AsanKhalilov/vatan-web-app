import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VisitService } from './visit.service';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';

@Controller('visits')
export class VisitController {
    constructor(private readonly visitService: VisitService) { }

    @Get()
    async findAll() {
        return await this.visitService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.visitService.findOne(id);
    }

    @Post()
    async create(@Body() createVisitDto: CreateVisitDto) {
        return await this.visitService.create(createVisitDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateVisitDto: UpdateVisitDto) {
        return await this.visitService.update(id, updateVisitDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.visitService.delete(id);
    }
}
