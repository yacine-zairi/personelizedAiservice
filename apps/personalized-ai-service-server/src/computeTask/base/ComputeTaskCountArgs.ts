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
import { Type } from "class-transformer";

@ArgsType()
class ComputeTaskCountArgs {
  @ApiProperty({
    required: false,
    type: () => ComputeTaskWhereInput,
  })
  @Field(() => ComputeTaskWhereInput, { nullable: true })
  @Type(() => ComputeTaskWhereInput)
  where?: ComputeTaskWhereInput;
}

export { ComputeTaskCountArgs as ComputeTaskCountArgs };
