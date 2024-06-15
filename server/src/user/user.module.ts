import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, JwtModule.register({
    secret: 'YOUR_SECRET_KEY',
    signOptions: { expiresIn: '60m' },
  })],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // экспортируем UserService для использования в других модулях
})
export class UserModule { }
