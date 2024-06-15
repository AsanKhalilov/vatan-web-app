// export class UpdateAttractionDto {
//     readonly name?: string;
//     readonly description?: string;
//     readonly location?: string;
//     readonly category?: string;
//     readonly rating?: number;
// }
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateAttractionDto {
    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsString()
    @IsOptional()
    readonly description?: string;

    @IsString()
    @IsOptional()
    readonly location?: string;

    @IsString()
    @IsOptional()
    readonly category?: string;

    @IsNumber()
    @IsOptional()
    readonly rating?: number;
}
