import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreferenceServiceBase } from "./base/preference.service.base";

@Injectable()
export class PreferenceService extends PreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
