import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiResponseServiceBase } from "./base/aiResponse.service.base";

@Injectable()
export class AiResponseService extends AiResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
