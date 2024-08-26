import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComputeTaskService } from "./computeTask.service";
import { ComputeTaskControllerBase } from "./base/computeTask.controller.base";

@swagger.ApiTags("computeTasks")
@common.Controller("computeTasks")
export class ComputeTaskController extends ComputeTaskControllerBase {
  constructor(
    protected readonly service: ComputeTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
