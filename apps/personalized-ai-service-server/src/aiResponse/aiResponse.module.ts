import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiResponseModuleBase } from "./base/aiResponse.module.base";
import { AiResponseService } from "./aiResponse.service";
import { AiResponseController } from "./aiResponse.controller";
import { AiResponseResolver } from "./aiResponse.resolver";

@Module({
  imports: [AiResponseModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiResponseController],
  providers: [AiResponseService, AiResponseResolver],
  exports: [AiResponseService],
})
export class AiResponseModule {}
