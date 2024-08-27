import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContextService } from "./context.service";
import { ContextGrpcControllerBase } from "./base/context.grpc.controller.base";

@swagger.ApiTags("contexts")
@common.Controller("contexts")
export class ContextGrpcController extends ContextGrpcControllerBase {
  constructor(protected readonly service: ContextService) {
    super(service);
  }
}
