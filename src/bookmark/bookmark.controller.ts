import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

import {
  ApiResponse,
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseBookmarkDto } from './dto/response-bookmark.dto';

@ApiBearerAuth()
@ApiTags('Bookmark')
@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @ApiResponse({
    status: 200,
    type: [ResponseBookmarkDto],
    description: '### Get all bookmarks of the user',
  })
  @Get()
  getBookmarks(@GetUser('id') userId: number) {
    return this.bookmarkService.getBookmarks(userId);
  }

  @ApiResponse({
    status: 200,
    type: ResponseBookmarkDto,
    description: '### Get one bookmark by id',
  })
  @Get(':id')
  getbookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.getbookmarkById(userId, bookmarkId);
  }

  @ApiResponse({
    status: 201,
    type: ResponseBookmarkDto,
    description: '### Create new bookmark of the user',
  })
  @Post()
  createbookmark(
    @GetUser('id') userId: number,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarkService.createbookmark(userId, dto);
  }

  @ApiResponse({
    status: 200,
    type: ResponseBookmarkDto,
    description: '### Edit bookmark by id',
  })
  @Patch(':id')
  editBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body() dto: EditBookmarkDto,
  ) {
    return this.bookmarkService.editBookmarkById(userId, bookmarkId, dto);
  }

  @ApiResponse({
    status: 204,
    description: '### Delete bookmark by id',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.deleteBookmarkById(userId, bookmarkId);
  }
}
