import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PreferenceModuleBase } from "./base/preference.module.base";
import { PreferenceService } from "./preference.service";
import { PreferenceController } from "./preference.controller";
import { PreferenceResolver } from "./preference.resolver";

@Module({
  imports: [PreferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PreferenceController],
  providers: [PreferenceService, PreferenceResolver],
  exports: [PreferenceService],
})
export class PreferenceModule {}
