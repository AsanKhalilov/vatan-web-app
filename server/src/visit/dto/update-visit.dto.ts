// export class UpdateVisitDto {
//     status?: string;
//     createdAt?: Date;
// }
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateVisitDto {
    @IsString()
    @IsOptional()
    status?: string;

    @IsString()
    @IsOptional()
    createdAt?: Date;
}
