import { ApiProperty } from '@nestjs/swagger';

export class GlobalResponse {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message: string;

  @ApiProperty()
  data: any;
}
