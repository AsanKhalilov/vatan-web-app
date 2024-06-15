// export class CreateReviewDto {
//     userId: number;
//     attractionId: number;
//     rating: number;
//     comment: string;
//     createdAt: Date;
// }
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateReviewDto {
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    attractionId: number;

    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsString()
    @IsNotEmpty()
    createdAt: Date;
}
