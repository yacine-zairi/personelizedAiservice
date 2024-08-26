import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SegmentService } from "./segment.service";
import { SegmentControllerBase } from "./base/segment.controller.base";

@swagger.ApiTags("segments")
@common.Controller("segments")
export class SegmentController extends SegmentControllerBase {
  constructor(
    protected readonly service: SegmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
