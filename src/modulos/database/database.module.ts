import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MisMigraciones } from './migrations/mismigraciones';

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        useFactory: () => ({
          type: 'mysql',
          host: process.env.DATABASE_HOST,
          port: parseInt(process.env.DATABASE_PORT) || 3306,
          username: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
          keepConnectionAlive: true
        })
      }),
    ]
  })
  export class DatabaseModule {
    constructor(private dataSource: DataSource) {      
      const migration = new MisMigraciones();
      migration.crearGrados();
      migration.crearMaterias();
    }
  }