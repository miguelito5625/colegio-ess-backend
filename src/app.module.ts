import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradosModule } from './grados/grados.module';

@Module({
  imports: [GradosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
