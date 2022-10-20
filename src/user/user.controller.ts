import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

import { ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseUserDto } from './dto/response-user.dto';

@ApiBearerAuth()
@ApiTags('User')
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiResponse({
    status: 200,
    type: ResponseUserDto,
    description: '### Get profile information of logged in user'
  })
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @ApiResponse({
    status: 200,
    type: ResponseUserDto,
    description: '### Edit profile information of logged in user'
  })
  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
