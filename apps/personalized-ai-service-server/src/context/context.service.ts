import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContextServiceBase } from "./base/context.service.base";

@Injectable()
export class ContextService extends ContextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
