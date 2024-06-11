import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttractionService } from './attraction.service';
import { AttractionController } from './attraction.controller';
import { Attraction } from './attraction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attraction])],
  providers: [AttractionService],
  controllers: [AttractionController],
})
export class AttractionModule { }
