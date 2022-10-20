import { ApiProperty } from '@nestjs/swagger';

export class ResponseAuthDto {
  @ApiProperty({ required: true })
  access_token: string;
}
