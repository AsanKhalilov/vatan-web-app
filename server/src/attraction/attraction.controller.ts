import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AttractionService } from './attraction.service';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';


@Controller('attractions')
export class AttractionController {
    constructor(private readonly attractionService: AttractionService) { }

    @Post()
    create(@Body() createAttractionDto: CreateAttractionDto) {
        return this.attractionService.create(createAttractionDto);
    }

    @Get()
    findAll() {
        return this.attractionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.attractionService.findOne(+id);
    }
}
