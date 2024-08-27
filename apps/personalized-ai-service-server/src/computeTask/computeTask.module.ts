import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComputeTaskModuleBase } from "./base/computeTask.module.base";
import { ComputeTaskService } from "./computeTask.service";
import { ComputeTaskController } from "./computeTask.controller";
import { ComputeTaskGrpcController } from "./computeTask.grpc.controller";
import { ComputeTaskResolver } from "./computeTask.resolver";

@Module({
  imports: [ComputeTaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComputeTaskController, ComputeTaskGrpcController],
  providers: [ComputeTaskService, ComputeTaskResolver],
  exports: [ComputeTaskService],
})
export class ComputeTaskModule {}
