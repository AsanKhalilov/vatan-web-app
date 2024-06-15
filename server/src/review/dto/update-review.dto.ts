// export class UpdateReviewDto {
//     rating?: number;
//     comment?: string;
//     createdAt?: Date;
// }
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateReviewDto {
    @IsNumber()
    @IsOptional()
    rating?: number;

    @IsString()
    @IsOptional()
    comment?: string;

    @IsString()
    @IsOptional()
    createdAt?: Date;
}
