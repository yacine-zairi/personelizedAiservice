import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversationHistoryServiceBase } from "./base/conversationHistory.service.base";

@Injectable()
export class ConversationHistoryService extends ConversationHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
