import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { VisitService } from './visit.service';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('visits')
@UseGuards(JwtAuthGuard)
@Roles('user', 'admin')
export class VisitController {
    constructor(private readonly visitService: VisitService) { }

    @Post()
    create(@Body() createVisitDto: CreateVisitDto) {
        return this.visitService.create(createVisitDto);
    }

    @Get()
    findAll() {
        return this.visitService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.visitService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateVisitDto: UpdateVisitDto) {
        return this.visitService.update(id, updateVisitDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.visitService.delete(id);
    }
}
