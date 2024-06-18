import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { AttractionService } from './attraction.service';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { AdminGuard } from '../auth/guards/admin.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('attractions')
export class AttractionController {
    constructor(private readonly attractionService: AttractionService) { }

    @Post()
    @UseGuards(AdminGuard)
    @Roles('admin')
    create(@Body() createAttractionDto: CreateAttractionDto) {
        return this.attractionService.create(createAttractionDto);
    }

    @Get()
    findAll() {
        return this.attractionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.attractionService.findOne(id);
    }

    @Patch(':id')
    @UseGuards(AdminGuard)
    @Roles('admin')
    update(@Param('id') id: number, @Body() updateAttractionDto: UpdateAttractionDto) {
        return this.attractionService.update(id, updateAttractionDto);
    }

    @Delete(':id')
    @UseGuards(AdminGuard)
    @Roles('admin')
    remove(@Param('id') id: number) {
        return this.attractionService.remove(id);
    }
}
