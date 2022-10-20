import { ApiProperty } from '@nestjs/swagger';

export class ResponseBookmarkDto {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  createdAt: string;

  @ApiProperty({ required: true })
  updatedAt: string;

  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: true })
  link: string;

  @ApiProperty({ required: true })
  userId: number;
}
// {
//   "id": 1,
//   "createdAt": "2022-10-20T05:48:00.676Z",
//   "updatedat": "2022-10-20T05:48:00.676Z",
//   "title": "test",
//   "description": "test test test",
//   "link": "test",
//   "userId": 2
// }
