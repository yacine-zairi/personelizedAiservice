import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "conversationhistory",
      "airesponse",
      "user",
      "segment",
      "preference",
      "context",
      "computetask",
      "bookmark"
    ],
    protoPath: [
      "src/conversationhistory/conversationhistory.proto",
      "src/airesponse/airesponse.proto",
      "src/user/user.proto",
      "src/segment/segment.proto",
      "src/preference/preference.proto",
      "src/context/context.proto",
      "src/computetask/computetask.proto",
      "src/bookmark/bookmark.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
