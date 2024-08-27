import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ConversationHistoryResolverBase } from "./base/conversationHistory.resolver.base";
import { ConversationHistory } from "./base/ConversationHistory";
import { ConversationHistoryService } from "./conversationHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ConversationHistory)
export class ConversationHistoryResolver extends ConversationHistoryResolverBase {
  constructor(
    protected readonly service: ConversationHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
