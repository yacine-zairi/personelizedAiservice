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
import { PreferenceService } from "../preference.service";
import { PreferenceCreateInput } from "./PreferenceCreateInput";
import { PreferenceWhereInput } from "./PreferenceWhereInput";
import { PreferenceWhereUniqueInput } from "./PreferenceWhereUniqueInput";
import { PreferenceFindManyArgs } from "./PreferenceFindManyArgs";
import { PreferenceUpdateInput } from "./PreferenceUpdateInput";
import { Preference } from "./Preference";

export class PreferenceGrpcControllerBase {
  constructor(protected readonly service: PreferenceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Preference })
  @GrpcMethod("PreferenceService", "createPreference")
  async createPreference(
    @common.Body() data: PreferenceCreateInput
  ): Promise<Preference> {
    return await this.service.createPreference({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Preference] })
  @ApiNestedQuery(PreferenceFindManyArgs)
  @GrpcMethod("PreferenceService", "preferences")
  async preferences(@common.Req() request: Request): Promise<Preference[]> {
    const args = plainToClass(PreferenceFindManyArgs, request.query);
    return this.service.preferences({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Preference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PreferenceService", "preference")
  async preference(
    @common.Param() params: PreferenceWhereUniqueInput
  ): Promise<Preference | null> {
    const result = await this.service.preference({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: Preference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PreferenceService", "updatePreference")
  async updatePreference(
    @common.Param() params: PreferenceWhereUniqueInput,
    @common.Body() data: PreferenceUpdateInput
  ): Promise<Preference | null> {
    try {
      return await this.service.updatePreference({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: Preference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PreferenceService", "deletePreference")
  async deletePreference(
    @common.Param() params: PreferenceWhereUniqueInput
  ): Promise<Preference | null> {
    try {
      return await this.service.deletePreference({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          value: true,
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
