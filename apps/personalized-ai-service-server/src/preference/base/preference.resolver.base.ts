/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Preference } from "./Preference";
import { PreferenceCountArgs } from "./PreferenceCountArgs";
import { PreferenceFindManyArgs } from "./PreferenceFindManyArgs";
import { PreferenceFindUniqueArgs } from "./PreferenceFindUniqueArgs";
import { CreatePreferenceArgs } from "./CreatePreferenceArgs";
import { UpdatePreferenceArgs } from "./UpdatePreferenceArgs";
import { DeletePreferenceArgs } from "./DeletePreferenceArgs";
import { PreferenceService } from "../preference.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Preference)
export class PreferenceResolverBase {
  constructor(
    protected readonly service: PreferenceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Preference",
    action: "read",
    possession: "any",
  })
  async _preferencesMeta(
    @graphql.Args() args: PreferenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Preference])
  @nestAccessControl.UseRoles({
    resource: "Preference",
    action: "read",
    possession: "any",
  })
  async preferences(
    @graphql.Args() args: PreferenceFindManyArgs
  ): Promise<Preference[]> {
    return this.service.preferences(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Preference, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Preference",
    action: "read",
    possession: "own",
  })
  async preference(
    @graphql.Args() args: PreferenceFindUniqueArgs
  ): Promise<Preference | null> {
    const result = await this.service.preference(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Preference)
  @nestAccessControl.UseRoles({
    resource: "Preference",
    action: "create",
    possession: "any",
  })
  async createPreference(
    @graphql.Args() args: CreatePreferenceArgs
  ): Promise<Preference> {
    return await this.service.createPreference({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Preference)
  @nestAccessControl.UseRoles({
    resource: "Preference",
    action: "update",
    possession: "any",
  })
  async updatePreference(
    @graphql.Args() args: UpdatePreferenceArgs
  ): Promise<Preference | null> {
    try {
      return await this.service.updatePreference({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Preference)
  @nestAccessControl.UseRoles({
    resource: "Preference",
    action: "delete",
    possession: "any",
  })
  async deletePreference(
    @graphql.Args() args: DeletePreferenceArgs
  ): Promise<Preference | null> {
    try {
      return await this.service.deletePreference(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
