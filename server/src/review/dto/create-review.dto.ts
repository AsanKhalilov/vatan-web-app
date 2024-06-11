export class CreateReviewDto {
    userId: number;
    attractionId: number;
    rating: number;
    comment: string;
    createdAt: Date;
}
