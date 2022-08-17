import { Controller, Get } from '@nestjs/common';
import { GradosService } from './grados.service';

@Controller('grados')
export class GradosController {

    constructor(
        private readonly servicioGrados: GradosService
    ) {

    }

    @Get()
    getHello(): string {
        return this.servicioGrados.getHello();
    }

}
