import { DallEMockInnerDataDto } from './dalle-mock-inner-data.dto';

export class DallEMockImageDto {
  data: DallEMockInnerDataDto[];

  constructor(data: string[]) {
    this.data = data.map((url) => new DallEMockInnerDataDto(url));
  }
}
