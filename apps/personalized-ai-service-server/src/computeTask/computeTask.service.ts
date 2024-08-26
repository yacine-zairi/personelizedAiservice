import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComputeTaskServiceBase } from "./base/computeTask.service.base";

@Injectable()
export class ComputeTaskService extends ComputeTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
