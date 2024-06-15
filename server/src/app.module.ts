// server/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AttractionModule } from './attraction/attraction.module';
import { ReviewModule } from './review/review.module';
import { VisitModule } from './visit/visit.module';
import { ormconfig } from './ormconfig';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    AuthModule,
    AttractionModule,
    ReviewModule,
    VisitModule,
  ],
})
export class AppModule { }