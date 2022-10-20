import { Test } from '@nestjs/testing';
import { PrismaService } from '../../src/prisma/prisma.service';
import { AppModule } from '../../src/app.module';
import * as argon from 'argon2';
import { BookmarkService } from '../../src/bookmark/bookmark.service';
import { CreateBookmarkDto } from 'src/bookmark/dto';

describe('Bookmark Service Int', () => {
  let prisma: PrismaService;
  let bookmarService: BookmarkService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    prisma = moduleRef.get(PrismaService);
    bookmarService = moduleRef.get(BookmarkService);
    await prisma.cleanDb();
  });
  describe('Create Bookmark', () => {
    let userId: number;
    const dto: CreateBookmarkDto = {
      title: 'test',
      link: 'test test test',
    };
    it('Should create user', async () => {
      const hash = await argon.hash('123');
      const user = await prisma.user.create({
        data: {
          email: 'email@gmail.com',
          hash: hash,
          firstName: 'test',
          lastName: 'test',
        },
      });
      userId = user.id;
    });
    it('Should create bookmark', async () => {
      const bookmark = await bookmarService.createbookmark(userId, dto);
      expect(bookmark.title).toBe(dto.title);
      expect(bookmark.link).toBe(dto.link);
    });
  });
});
