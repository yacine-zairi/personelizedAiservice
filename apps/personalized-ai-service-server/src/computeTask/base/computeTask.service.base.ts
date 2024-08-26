/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ComputeTask as PrismaComputeTask } from "@prisma/client";

export class ComputeTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ComputeTaskCountArgs, "select">
  ): Promise<number> {
    return this.prisma.computeTask.count(args);
  }

  async computeTasks(
    args: Prisma.ComputeTaskFindManyArgs
  ): Promise<PrismaComputeTask[]> {
    return this.prisma.computeTask.findMany(args);
  }
  async computeTask(
    args: Prisma.ComputeTaskFindUniqueArgs
  ): Promise<PrismaComputeTask | null> {
    return this.prisma.computeTask.findUnique(args);
  }
  async createComputeTask(
    args: Prisma.ComputeTaskCreateArgs
  ): Promise<PrismaComputeTask> {
    return this.prisma.computeTask.create(args);
  }
  async updateComputeTask(
    args: Prisma.ComputeTaskUpdateArgs
  ): Promise<PrismaComputeTask> {
    return this.prisma.computeTask.update(args);
  }
  async deleteComputeTask(
    args: Prisma.ComputeTaskDeleteArgs
  ): Promise<PrismaComputeTask> {
    return this.prisma.computeTask.delete(args);
  }
}