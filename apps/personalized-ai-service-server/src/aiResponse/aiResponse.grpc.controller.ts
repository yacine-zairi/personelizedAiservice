import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiResponseService } from "./aiResponse.service";
import { AiResponseGrpcControllerBase } from "./base/aiResponse.grpc.controller.base";

@swagger.ApiTags("aiResponses")
@common.Controller("aiResponses")
export class AiResponseGrpcController extends AiResponseGrpcControllerBase {
  constructor(protected readonly service: AiResponseService) {
    super(service);
  }
}
