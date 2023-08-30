import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DallEMockImageDto } from './dto/dalle-mock-image.dto';

@Injectable()
export class AppService {
  private readonly mockImageUrl;

  constructor(private readonly configService: ConfigService) {
    this.mockImageUrl = this.configService.get<string>('MOCK_IMAGE_URL');
  }

  async generateDallEMockImage(): Promise<DallEMockImageDto> {
    await new Promise((resolve) => setTimeout(resolve, 8500));
    return new DallEMockImageDto([this.mockImageUrl]); // mock image url
  }
}
