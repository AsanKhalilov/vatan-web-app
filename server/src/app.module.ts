import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AttractionModule } from './attraction/attraction.module';
import { ReviewModule } from './review/review.module';
import { VisitModule } from './visit/visit.module';
import { ormconfig } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { RolesMiddleware } from './middlewares/roles.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    AuthModule,
    AttractionModule,
    ReviewModule,
    VisitModule,
    JwtModule.register({
      secret: 'topSecret51', // используйте тот же секретный ключ
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RolesMiddleware)
      .exclude(
        { path: 'attractions', method: RequestMethod.GET },
        { path: 'attractions/:id', method: RequestMethod.GET },
        { path: 'auth/register', method: RequestMethod.POST },
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'reviews', method: RequestMethod.GET },
        { path: 'reviews/:id', method: RequestMethod.GET },
      )
      .forRoutes('*');
  }
}
