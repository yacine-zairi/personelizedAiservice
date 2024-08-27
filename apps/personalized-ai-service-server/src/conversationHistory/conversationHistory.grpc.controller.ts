import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversationHistoryService } from "./conversationHistory.service";
import { ConversationHistoryGrpcControllerBase } from "./base/conversationHistory.grpc.controller.base";

@swagger.ApiTags("conversationHistories")
@common.Controller("conversationHistories")
export class ConversationHistoryGrpcController extends ConversationHistoryGrpcControllerBase {
  constructor(protected readonly service: ConversationHistoryService) {
    super(service);
  }
}
