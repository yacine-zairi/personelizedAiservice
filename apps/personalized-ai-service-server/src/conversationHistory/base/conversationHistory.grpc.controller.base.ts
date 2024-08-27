/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { ConversationHistoryService } from "../conversationHistory.service";
import { ConversationHistoryCreateInput } from "./ConversationHistoryCreateInput";
import { ConversationHistoryWhereInput } from "./ConversationHistoryWhereInput";
import { ConversationHistoryWhereUniqueInput } from "./ConversationHistoryWhereUniqueInput";
import { ConversationHistoryFindManyArgs } from "./ConversationHistoryFindManyArgs";
import { ConversationHistoryUpdateInput } from "./ConversationHistoryUpdateInput";
import { ConversationHistory } from "./ConversationHistory";

export class ConversationHistoryGrpcControllerBase {
  constructor(protected readonly service: ConversationHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ConversationHistory })
  @GrpcMethod("ConversationHistoryService", "createConversationHistory")
  async createConversationHistory(
    @common.Body() data: ConversationHistoryCreateInput
  ): Promise<ConversationHistory> {
    return await this.service.createConversationHistory({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ConversationHistory] })
  @ApiNestedQuery(ConversationHistoryFindManyArgs)
  @GrpcMethod("ConversationHistoryService", "conversationHistories")
  async conversationHistories(
    @common.Req() request: Request
  ): Promise<ConversationHistory[]> {
    const args = plainToClass(ConversationHistoryFindManyArgs, request.query);
    return this.service.conversationHistories({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ConversationHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ConversationHistoryService", "conversationHistory")
  async conversationHistory(
    @common.Param() params: ConversationHistoryWhereUniqueInput
  ): Promise<ConversationHistory | null> {
    const result = await this.service.conversationHistory({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ConversationHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ConversationHistoryService", "updateConversationHistory")
  async updateConversationHistory(
    @common.Param() params: ConversationHistoryWhereUniqueInput,
    @common.Body() data: ConversationHistoryUpdateInput
  ): Promise<ConversationHistory | null> {
    try {
      return await this.service.updateConversationHistory({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ConversationHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ConversationHistoryService", "deleteConversationHistory")
  async deleteConversationHistory(
    @common.Param() params: ConversationHistoryWhereUniqueInput
  ): Promise<ConversationHistory | null> {
    try {
      return await this.service.deleteConversationHistory({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}