import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BookmarkService } from "./bookmark.service";
import { BookmarkControllerBase } from "./base/bookmark.controller.base";

@swagger.ApiTags("bookmarks")
@common.Controller("bookmarks")
export class BookmarkController extends BookmarkControllerBase {
  constructor(
    protected readonly service: BookmarkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
