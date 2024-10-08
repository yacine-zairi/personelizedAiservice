import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SegmentModuleBase } from "./base/segment.module.base";
import { SegmentService } from "./segment.service";
import { SegmentController } from "./segment.controller";
import { SegmentGrpcController } from "./segment.grpc.controller";
import { SegmentResolver } from "./segment.resolver";

@Module({
  imports: [SegmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [SegmentController, SegmentGrpcController],
  providers: [SegmentService, SegmentResolver],
  exports: [SegmentService],
})
export class SegmentModule {}
