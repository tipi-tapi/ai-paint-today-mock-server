import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DallEMockImageDto } from './dto/dalle-mock-image.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  generateDallEMockImage(): Promise<DallEMockImageDto> {
    return this.appService.generateDallEMockImage();
  }
}
