import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PreferenceService } from "./preference.service";
import { PreferenceGrpcControllerBase } from "./base/preference.grpc.controller.base";

@swagger.ApiTags("preferences")
@common.Controller("preferences")
export class PreferenceGrpcController extends PreferenceGrpcControllerBase {
  constructor(protected readonly service: PreferenceService) {
    super(service);
  }
}
