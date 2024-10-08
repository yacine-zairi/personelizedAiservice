/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Preference as PrismaPreference } from "@prisma/client";

export class PreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PreferenceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.preference.count(args);
  }

  async preferences(
    args: Prisma.PreferenceFindManyArgs
  ): Promise<PrismaPreference[]> {
    return this.prisma.preference.findMany(args);
  }
  async preference(
    args: Prisma.PreferenceFindUniqueArgs
  ): Promise<PrismaPreference | null> {
    return this.prisma.preference.findUnique(args);
  }
  async createPreference(
    args: Prisma.PreferenceCreateArgs
  ): Promise<PrismaPreference> {
    return this.prisma.preference.create(args);
  }
  async updatePreference(
    args: Prisma.PreferenceUpdateArgs
  ): Promise<PrismaPreference> {
    return this.prisma.preference.update(args);
  }
  async deletePreference(
    args: Prisma.PreferenceDeleteArgs
  ): Promise<PrismaPreference> {
    return this.prisma.preference.delete(args);
  }
}
