import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationHistoryModuleBase } from "./base/conversationHistory.module.base";
import { ConversationHistoryService } from "./conversationHistory.service";
import { ConversationHistoryController } from "./conversationHistory.controller";
import { ConversationHistoryResolver } from "./conversationHistory.resolver";

@Module({
  imports: [ConversationHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConversationHistoryController],
  providers: [ConversationHistoryService, ConversationHistoryResolver],
  exports: [ConversationHistoryService],
})
export class ConversationHistoryModule {}
