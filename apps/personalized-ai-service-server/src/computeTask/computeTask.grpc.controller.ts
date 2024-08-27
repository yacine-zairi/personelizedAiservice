import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComputeTaskService } from "./computeTask.service";
import { ComputeTaskGrpcControllerBase } from "./base/computeTask.grpc.controller.base";

@swagger.ApiTags("computeTasks")
@common.Controller("computeTasks")
export class ComputeTaskGrpcController extends ComputeTaskGrpcControllerBase {
  constructor(protected readonly service: ComputeTaskService) {
    super(service);
  }
}
