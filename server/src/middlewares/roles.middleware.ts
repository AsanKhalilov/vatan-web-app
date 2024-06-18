import { Injectable, NestMiddleware, UnauthorizedException, ForbiddenException, Inject } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class RolesMiddleware implements NestMiddleware {
    constructor(
        @Inject(JwtService) private jwtService: JwtService,
        @Inject(UserService) private userService: UserService
    ) { }

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Authorization header missing or malformed');
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = this.jwtService.verify(token);
            const user = await this.userService.findByEmail(decoded.email);

            if (!user) {
                throw new UnauthorizedException('User not found');
            }

            req['user'] = user;
            next();
        } catch (error) {
            throw new ForbiddenException('Access denied');
        }
    }
}
