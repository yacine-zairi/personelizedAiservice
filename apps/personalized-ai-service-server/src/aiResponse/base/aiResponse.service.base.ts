/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AiResponse as PrismaAiResponse } from "@prisma/client";

export class AiResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AiResponseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.aiResponse.count(args);
  }

  async aiResponses(
    args: Prisma.AiResponseFindManyArgs
  ): Promise<PrismaAiResponse[]> {
    return this.prisma.aiResponse.findMany(args);
  }
  async aiResponse(
    args: Prisma.AiResponseFindUniqueArgs
  ): Promise<PrismaAiResponse | null> {
    return this.prisma.aiResponse.findUnique(args);
  }
  async createAiResponse(
    args: Prisma.AiResponseCreateArgs
  ): Promise<PrismaAiResponse> {
    return this.prisma.aiResponse.create(args);
  }
  async updateAiResponse(
    args: Prisma.AiResponseUpdateArgs
  ): Promise<PrismaAiResponse> {
    return this.prisma.aiResponse.update(args);
  }
  async deleteAiResponse(
    args: Prisma.AiResponseDeleteArgs
  ): Promise<PrismaAiResponse> {
    return this.prisma.aiResponse.delete(args);
  }
}
