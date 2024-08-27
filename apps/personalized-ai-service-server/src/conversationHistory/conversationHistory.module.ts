import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationHistoryModuleBase } from "./base/conversationHistory.module.base";
import { ConversationHistoryService } from "./conversationHistory.service";
import { ConversationHistoryController } from "./conversationHistory.controller";
import { ConversationHistoryGrpcController } from "./conversationHistory.grpc.controller";
import { ConversationHistoryResolver } from "./conversationHistory.resolver";

@Module({
  imports: [ConversationHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    ConversationHistoryController,
    ConversationHistoryGrpcController,
  ],
  providers: [ConversationHistoryService, ConversationHistoryResolver],
  exports: [ConversationHistoryService],
})
export class ConversationHistoryModule {}
