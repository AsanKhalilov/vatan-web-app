import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async register(createUserDto: CreateUserDto): Promise<void> {
        await this.userService.create(createUserDto);
    }

    // async login(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    //     const { email, password } = authCredentialsDto;
    //     const user = await this.userService.findByEmail(email);

    //     if (user && user.password === password) { // Необходимо заменить на хеширование пароля
    //         const payload = { email };
    //         const accessToken = await this.jwtService.sign(payload);
    //         return { accessToken };
    //     } else {
    //         throw new UnauthorizedException('Invalid credentials');
    //     }
    // }
    async login(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        const email = await this.userService.validateUserPassword(authCredentialsDto);

        if (!email) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { email };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
}
