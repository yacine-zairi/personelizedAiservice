import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContextModuleBase } from "./base/context.module.base";
import { ContextService } from "./context.service";
import { ContextController } from "./context.controller";
import { ContextGrpcController } from "./context.grpc.controller";
import { ContextResolver } from "./context.resolver";

@Module({
  imports: [ContextModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContextController, ContextGrpcController],
  providers: [ContextService, ContextResolver],
  exports: [ContextService],
})
export class ContextModule {}
