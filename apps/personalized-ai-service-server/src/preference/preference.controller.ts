import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PreferenceService } from "./preference.service";
import { PreferenceControllerBase } from "./base/preference.controller.base";

@swagger.ApiTags("preferences")
@common.Controller("preferences")
export class PreferenceController extends PreferenceControllerBase {
  constructor(
    protected readonly service: PreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
