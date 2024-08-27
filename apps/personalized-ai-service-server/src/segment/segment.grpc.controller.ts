import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SegmentService } from "./segment.service";
import { SegmentGrpcControllerBase } from "./base/segment.grpc.controller.base";

@swagger.ApiTags("segments")
@common.Controller("segments")
export class SegmentGrpcController extends SegmentGrpcControllerBase {
  constructor(protected readonly service: SegmentService) {
    super(service);
  }
}
