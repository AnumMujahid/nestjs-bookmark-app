import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseAuthDto } from './dto/response-auth.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // access_token: 'token string'
  @ApiResponse({
    status: 201,
    type: ResponseAuthDto,
    description: '### Create new user on signup',
  })
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  // access_token: 'token string'
  @ApiResponse({
    status: 200,
    type: ResponseAuthDto,
    description: '### User signin',
  })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
