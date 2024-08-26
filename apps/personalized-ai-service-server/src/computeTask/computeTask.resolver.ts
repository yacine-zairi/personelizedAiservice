import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComputeTaskResolverBase } from "./base/computeTask.resolver.base";
import { ComputeTask } from "./base/ComputeTask";
import { ComputeTaskService } from "./computeTask.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComputeTask)
export class ComputeTaskResolver extends ComputeTaskResolverBase {
  constructor(
    protected readonly service: ComputeTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
