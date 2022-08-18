import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradosModule } from './grados/grados.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'Mariobross5625.',
      database: 'colegio',
      entities: [],
      synchronize: true,
    }),
    GradosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
