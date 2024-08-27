import { Module } from "@nestjs/common";
import { ConversationHistoryModule } from "./conversationHistory/conversationHistory.module";
import { AiResponseModule } from "./aiResponse/aiResponse.module";
import { UserModule } from "./user/user.module";
import { SegmentModule } from "./segment/segment.module";
import { PreferenceModule } from "./preference/preference.module";
import { ContextModule } from "./context/context.module";
import { ComputeTaskModule } from "./computeTask/computeTask.module";
import { BookmarkModule } from "./bookmark/bookmark.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    ConversationHistoryModule,
    AiResponseModule,
    UserModule,
    SegmentModule,
    PreferenceModule,
    ContextModule,
    ComputeTaskModule,
    BookmarkModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
