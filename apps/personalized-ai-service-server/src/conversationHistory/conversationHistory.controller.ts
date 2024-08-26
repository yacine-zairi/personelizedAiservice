import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConversationHistoryService } from "./conversationHistory.service";
import { ConversationHistoryControllerBase } from "./base/conversationHistory.controller.base";

@swagger.ApiTags("conversationHistories")
@common.Controller("conversationHistories")
export class ConversationHistoryController extends ConversationHistoryControllerBase {
  constructor(
    protected readonly service: ConversationHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
