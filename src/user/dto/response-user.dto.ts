import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserDto {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  createdAt: string;

  @ApiProperty({ required: true })
  updatedAt: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  firstName: string;

  @ApiProperty({ required: true })
  lastName: string;
}

//  {
//   "id": 2,
//   "createdAt": "2022-10-20T04:45:41.601Z",
//   "updatedat": "2022-10-20T04:45:41.601Z",
//   "email": "email1@gmail.com",
//   "firstName": null,
//   "lastName": null
// }
