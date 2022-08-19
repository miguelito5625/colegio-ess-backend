import { Injectable } from '@nestjs/common';

@Injectable()
export class GradosService {
    getHello(): string {
        return 'Hello World! grados';
    }
}
