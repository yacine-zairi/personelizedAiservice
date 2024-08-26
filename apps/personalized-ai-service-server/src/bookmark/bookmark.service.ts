import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BookmarkServiceBase } from "./base/bookmark.service.base";

@Injectable()
export class BookmarkService extends BookmarkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
