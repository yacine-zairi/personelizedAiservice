import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContextService } from "./context.service";
import { ContextControllerBase } from "./base/context.controller.base";

@swagger.ApiTags("contexts")
@common.Controller("contexts")
export class ContextController extends ContextControllerBase {
  constructor(
    protected readonly service: ContextService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
