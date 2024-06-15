// export class CreateVisitDto {
//     userId: number;
//     attractionId: number;
//     status: string;
//     createdAt: Date;
// }
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateVisitDto {
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    attractionId: number;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsNotEmpty()
    createdAt: Date;
}
