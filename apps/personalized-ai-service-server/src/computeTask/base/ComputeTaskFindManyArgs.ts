/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComputeTaskWhereInput } from "./ComputeTaskWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ComputeTaskOrderByInput } from "./ComputeTaskOrderByInput";

@ArgsType()
class ComputeTaskFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ComputeTaskWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ComputeTaskWhereInput, { nullable: true })
  @Type(() => ComputeTaskWhereInput)
  where?: ComputeTaskWhereInput;

  @ApiProperty({
    required: false,
    type: [ComputeTaskOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ComputeTaskOrderByInput], { nullable: true })
  @Type(() => ComputeTaskOrderByInput)
  orderBy?: Array<ComputeTaskOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ComputeTaskFindManyArgs as ComputeTaskFindManyArgs };