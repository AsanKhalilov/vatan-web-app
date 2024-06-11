import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormconfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '0000',
    database: 'vatan',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};