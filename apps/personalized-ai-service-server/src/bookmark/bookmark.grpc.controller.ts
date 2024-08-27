import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BookmarkService } from "./bookmark.service";
import { BookmarkGrpcControllerBase } from "./base/bookmark.grpc.controller.base";

@swagger.ApiTags("bookmarks")
@common.Controller("bookmarks")
export class BookmarkGrpcController extends BookmarkGrpcControllerBase {
  constructor(protected readonly service: BookmarkService) {
    super(service);
  }
}
