// export class CreateAttractionDto {
//     readonly name: string;
//     readonly description: string;
//     readonly location: string;
//     readonly category: string;
//     readonly rating: number;
// }
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateAttractionDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly location: string;

    @IsString()
    @IsNotEmpty()
    readonly category: string;

    @IsNumber()
    @IsOptional()
    readonly rating?: number;
}
