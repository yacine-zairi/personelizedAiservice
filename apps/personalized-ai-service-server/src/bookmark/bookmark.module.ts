import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BookmarkModuleBase } from "./base/bookmark.module.base";
import { BookmarkService } from "./bookmark.service";
import { BookmarkController } from "./bookmark.controller";
import { BookmarkResolver } from "./bookmark.resolver";

@Module({
  imports: [BookmarkModuleBase, forwardRef(() => AuthModule)],
  controllers: [BookmarkController],
  providers: [BookmarkService, BookmarkResolver],
  exports: [BookmarkService],
})
export class BookmarkModule {}
