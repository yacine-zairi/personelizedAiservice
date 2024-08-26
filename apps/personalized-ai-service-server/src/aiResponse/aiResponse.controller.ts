import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiResponseService } from "./aiResponse.service";
import { AiResponseControllerBase } from "./base/aiResponse.controller.base";

@swagger.ApiTags("aiResponses")
@common.Controller("aiResponses")
export class AiResponseController extends AiResponseControllerBase {
  constructor(
    protected readonly service: AiResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
