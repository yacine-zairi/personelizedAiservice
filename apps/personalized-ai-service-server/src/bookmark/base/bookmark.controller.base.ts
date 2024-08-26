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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BookmarkService } from "../bookmark.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BookmarkCreateInput } from "./BookmarkCreateInput";
import { Bookmark } from "./Bookmark";
import { BookmarkFindManyArgs } from "./BookmarkFindManyArgs";
import { BookmarkWhereUniqueInput } from "./BookmarkWhereUniqueInput";
import { BookmarkUpdateInput } from "./BookmarkUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BookmarkControllerBase {
  constructor(
    protected readonly service: BookmarkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bookmark })
  @nestAccessControl.UseRoles({
    resource: "Bookmark",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBookmark(
    @common.Body() data: BookmarkCreateInput
  ): Promise<Bookmark> {
    return await this.service.createBookmark({
      data: data,
      select: {
        addDate: true,
        aiFigure: true,
        aiPoweredBookRecommendationsBookSurfAi: true,
        aiScientist: true,
        allApi: true,
        applicationOfExcavator_3DGuidanceSystem: true,
        applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
          true,
        arxiv: true,
        blackForestLabsFlux1SchnellHuggingFace: true,
        blackForestLabsFlux_1SchnellHuggingFace: true,
        bookSurfAi: true,
        brainybear: true,
        careercompanion: true,
        chinaInflatable: true,
        compareaimodels: true,
        connectedPapers: true,
        connectedPapersFindAndExploreAcademicPapers: true,
        connexionTLRecoursCitoyensConseilD_39Tat: true,
        connexionTeleRecoursCitoyens: true,
        courseMasteringFullStackDevelopment: true,
        courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
          true,
        createdAt: true,
        dagsHub: true,
        dashboard: true,
        dashboardSpeechmatics: true,
        deepAi: true,
        deepSeekCoder: true,
        deepgram: true,
        deeplearningAi: true,
        deepseekAiDeepSeekCoderV2Instruct: true,
        deepseekAiDeepSeekCoderV2InstructHuggingFace: true,
        defaultFolderDashboardNebiusAi: true,
        demoWithUi: true,
        diplomatie: true,
        etatCivilEtNationalite: true,
        etatCivilEtNationaliteFrancaise: true,
        figureAi: true,
        findARemoteAiJob: true,
        flux1Schnell: true,
        freeTranscriptionToolDeepgram: true,
        hCaptcha: true,
        hCaptchaDashboard: true,
        homeSubstack: true,
        icon: true,
        id: true,
        improvingAccuracyOfLlmApplications: true,
        improvingAccuracyOfLlmApplicationsDeepLearningAi: true,
        interviewGenerator: true,
        interviewQuestionGenerator: true,
        jumpCloud: true,
        lab2: true,
        lab2AiGeneratedDataApps: true,
        learnopalFlashcards: true,
        lidarSensorExcavatorGoogleSearch: true,
        massistant: true,
        massistantYourInspiringCompanion: true,
        massistantYourInspiringCompanionForLife: true,
        mindsmith: true,
        mmSciAMultimodalMultiDisciplineDataset: true,
        mmSciAMultimodalMultiDisciplineDatasetForPhD: true,
        mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
          true,
        multionAi: true,
        napkinAi: true,
        navigation: true,
        nebiusAi: true,
        orderTermsInflatablesChinee: true,
        orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
          true,
        polygrAi: true,
        polygrAiDigitalPolygraphPoweredByAi: true,
        proAiComparisonTool: true,
        quickStart: true,
        sakanaAi: true,
        sakanaAiAiScientist: true,
        sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
          true,
        scanDocFlow: true,
        signInNapkinAi: true,
        signupJumpCloud: true,
        startHereTutorialLesson: true,
        substack: true,
        systemRequirementsTopazPhotoAi: true,
        tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
          true,
        tavus: true,
        teleRecours: true,
        textMine: true,
        theAiScientistFullyAutomatedOpenEndedScientificDiscovery: true,
        theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery: true,
        title: true,
        topazPhotoAi: true,
        updatedAt: true,
        url: true,
        usingTheWmicCommandForDetailedProcessInformationWithExamples: true,
        usingWmicCommand: true,
        wmicCommand: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Bookmark] })
  @ApiNestedQuery(BookmarkFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bookmark",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bookmarks(@common.Req() request: Request): Promise<Bookmark[]> {
    const args = plainToClass(BookmarkFindManyArgs, request.query);
    return this.service.bookmarks({
      ...args,
      select: {
        addDate: true,
        aiFigure: true,
        aiPoweredBookRecommendationsBookSurfAi: true,
        aiScientist: true,
        allApi: true,
        applicationOfExcavator_3DGuidanceSystem: true,
        applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
          true,
        arxiv: true,
        blackForestLabsFlux1SchnellHuggingFace: true,
        blackForestLabsFlux_1SchnellHuggingFace: true,
        bookSurfAi: true,
        brainybear: true,
        careercompanion: true,
        chinaInflatable: true,
        compareaimodels: true,
        connectedPapers: true,
        connectedPapersFindAndExploreAcademicPapers: true,
        connexionTLRecoursCitoyensConseilD_39Tat: true,
        connexionTeleRecoursCitoyens: true,
        courseMasteringFullStackDevelopment: true,
        courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
          true,
        createdAt: true,
        dagsHub: true,
        dashboard: true,
        dashboardSpeechmatics: true,
        deepAi: true,
        deepSeekCoder: true,
        deepgram: true,
        deeplearningAi: true,
        deepseekAiDeepSeekCoderV2Instruct: true,
        deepseekAiDeepSeekCoderV2InstructHuggingFace: true,
        defaultFolderDashboardNebiusAi: true,
        demoWithUi: true,
        diplomatie: true,
        etatCivilEtNationalite: true,
        etatCivilEtNationaliteFrancaise: true,
        figureAi: true,
        findARemoteAiJob: true,
        flux1Schnell: true,
        freeTranscriptionToolDeepgram: true,
        hCaptcha: true,
        hCaptchaDashboard: true,
        homeSubstack: true,
        icon: true,
        id: true,
        improvingAccuracyOfLlmApplications: true,
        improvingAccuracyOfLlmApplicationsDeepLearningAi: true,
        interviewGenerator: true,
        interviewQuestionGenerator: true,
        jumpCloud: true,
        lab2: true,
        lab2AiGeneratedDataApps: true,
        learnopalFlashcards: true,
        lidarSensorExcavatorGoogleSearch: true,
        massistant: true,
        massistantYourInspiringCompanion: true,
        massistantYourInspiringCompanionForLife: true,
        mindsmith: true,
        mmSciAMultimodalMultiDisciplineDataset: true,
        mmSciAMultimodalMultiDisciplineDatasetForPhD: true,
        mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
          true,
        multionAi: true,
        napkinAi: true,
        navigation: true,
        nebiusAi: true,
        orderTermsInflatablesChinee: true,
        orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
          true,
        polygrAi: true,
        polygrAiDigitalPolygraphPoweredByAi: true,
        proAiComparisonTool: true,
        quickStart: true,
        sakanaAi: true,
        sakanaAiAiScientist: true,
        sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
          true,
        scanDocFlow: true,
        signInNapkinAi: true,
        signupJumpCloud: true,
        startHereTutorialLesson: true,
        substack: true,
        systemRequirementsTopazPhotoAi: true,
        tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
          true,
        tavus: true,
        teleRecours: true,
        textMine: true,
        theAiScientistFullyAutomatedOpenEndedScientificDiscovery: true,
        theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery: true,
        title: true,
        topazPhotoAi: true,
        updatedAt: true,
        url: true,
        usingTheWmicCommandForDetailedProcessInformationWithExamples: true,
        usingWmicCommand: true,
        wmicCommand: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bookmark })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bookmark",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bookmark(
    @common.Param() params: BookmarkWhereUniqueInput
  ): Promise<Bookmark | null> {
    const result = await this.service.bookmark({
      where: params,
      select: {
        addDate: true,
        aiFigure: true,
        aiPoweredBookRecommendationsBookSurfAi: true,
        aiScientist: true,
        allApi: true,
        applicationOfExcavator_3DGuidanceSystem: true,
        applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
          true,
        arxiv: true,
        blackForestLabsFlux1SchnellHuggingFace: true,
        blackForestLabsFlux_1SchnellHuggingFace: true,
        bookSurfAi: true,
        brainybear: true,
        careercompanion: true,
        chinaInflatable: true,
        compareaimodels: true,
        connectedPapers: true,
        connectedPapersFindAndExploreAcademicPapers: true,
        connexionTLRecoursCitoyensConseilD_39Tat: true,
        connexionTeleRecoursCitoyens: true,
        courseMasteringFullStackDevelopment: true,
        courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
          true,
        createdAt: true,
        dagsHub: true,
        dashboard: true,
        dashboardSpeechmatics: true,
        deepAi: true,
        deepSeekCoder: true,
        deepgram: true,
        deeplearningAi: true,
        deepseekAiDeepSeekCoderV2Instruct: true,
        deepseekAiDeepSeekCoderV2InstructHuggingFace: true,
        defaultFolderDashboardNebiusAi: true,
        demoWithUi: true,
        diplomatie: true,
        etatCivilEtNationalite: true,
        etatCivilEtNationaliteFrancaise: true,
        figureAi: true,
        findARemoteAiJob: true,
        flux1Schnell: true,
        freeTranscriptionToolDeepgram: true,
        hCaptcha: true,
        hCaptchaDashboard: true,
        homeSubstack: true,
        icon: true,
        id: true,
        improvingAccuracyOfLlmApplications: true,
        improvingAccuracyOfLlmApplicationsDeepLearningAi: true,
        interviewGenerator: true,
        interviewQuestionGenerator: true,
        jumpCloud: true,
        lab2: true,
        lab2AiGeneratedDataApps: true,
        learnopalFlashcards: true,
        lidarSensorExcavatorGoogleSearch: true,
        massistant: true,
        massistantYourInspiringCompanion: true,
        massistantYourInspiringCompanionForLife: true,
        mindsmith: true,
        mmSciAMultimodalMultiDisciplineDataset: true,
        mmSciAMultimodalMultiDisciplineDatasetForPhD: true,
        mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
          true,
        multionAi: true,
        napkinAi: true,
        navigation: true,
        nebiusAi: true,
        orderTermsInflatablesChinee: true,
        orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
          true,
        polygrAi: true,
        polygrAiDigitalPolygraphPoweredByAi: true,
        proAiComparisonTool: true,
        quickStart: true,
        sakanaAi: true,
        sakanaAiAiScientist: true,
        sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
          true,
        scanDocFlow: true,
        signInNapkinAi: true,
        signupJumpCloud: true,
        startHereTutorialLesson: true,
        substack: true,
        systemRequirementsTopazPhotoAi: true,
        tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
          true,
        tavus: true,
        teleRecours: true,
        textMine: true,
        theAiScientistFullyAutomatedOpenEndedScientificDiscovery: true,
        theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery: true,
        title: true,
        topazPhotoAi: true,
        updatedAt: true,
        url: true,
        usingTheWmicCommandForDetailedProcessInformationWithExamples: true,
        usingWmicCommand: true,
        wmicCommand: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bookmark })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bookmark",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBookmark(
    @common.Param() params: BookmarkWhereUniqueInput,
    @common.Body() data: BookmarkUpdateInput
  ): Promise<Bookmark | null> {
    try {
      return await this.service.updateBookmark({
        where: params,
        data: data,
        select: {
          addDate: true,
          aiFigure: true,
          aiPoweredBookRecommendationsBookSurfAi: true,
          aiScientist: true,
          allApi: true,
          applicationOfExcavator_3DGuidanceSystem: true,
          applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
            true,
          arxiv: true,
          blackForestLabsFlux1SchnellHuggingFace: true,
          blackForestLabsFlux_1SchnellHuggingFace: true,
          bookSurfAi: true,
          brainybear: true,
          careercompanion: true,
          chinaInflatable: true,
          compareaimodels: true,
          connectedPapers: true,
          connectedPapersFindAndExploreAcademicPapers: true,
          connexionTLRecoursCitoyensConseilD_39Tat: true,
          connexionTeleRecoursCitoyens: true,
          courseMasteringFullStackDevelopment: true,
          courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
            true,
          createdAt: true,
          dagsHub: true,
          dashboard: true,
          dashboardSpeechmatics: true,
          deepAi: true,
          deepSeekCoder: true,
          deepgram: true,
          deeplearningAi: true,
          deepseekAiDeepSeekCoderV2Instruct: true,
          deepseekAiDeepSeekCoderV2InstructHuggingFace: true,
          defaultFolderDashboardNebiusAi: true,
          demoWithUi: true,
          diplomatie: true,
          etatCivilEtNationalite: true,
          etatCivilEtNationaliteFrancaise: true,
          figureAi: true,
          findARemoteAiJob: true,
          flux1Schnell: true,
          freeTranscriptionToolDeepgram: true,
          hCaptcha: true,
          hCaptchaDashboard: true,
          homeSubstack: true,
          icon: true,
          id: true,
          improvingAccuracyOfLlmApplications: true,
          improvingAccuracyOfLlmApplicationsDeepLearningAi: true,
          interviewGenerator: true,
          interviewQuestionGenerator: true,
          jumpCloud: true,
          lab2: true,
          lab2AiGeneratedDataApps: true,
          learnopalFlashcards: true,
          lidarSensorExcavatorGoogleSearch: true,
          massistant: true,
          massistantYourInspiringCompanion: true,
          massistantYourInspiringCompanionForLife: true,
          mindsmith: true,
          mmSciAMultimodalMultiDisciplineDataset: true,
          mmSciAMultimodalMultiDisciplineDatasetForPhD: true,
          mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
            true,
          multionAi: true,
          napkinAi: true,
          navigation: true,
          nebiusAi: true,
          orderTermsInflatablesChinee: true,
          orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
            true,
          polygrAi: true,
          polygrAiDigitalPolygraphPoweredByAi: true,
          proAiComparisonTool: true,
          quickStart: true,
          sakanaAi: true,
          sakanaAiAiScientist: true,
          sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
            true,
          scanDocFlow: true,
          signInNapkinAi: true,
          signupJumpCloud: true,
          startHereTutorialLesson: true,
          substack: true,
          systemRequirementsTopazPhotoAi: true,
          tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
            true,
          tavus: true,
          teleRecours: true,
          textMine: true,
          theAiScientistFullyAutomatedOpenEndedScientificDiscovery: true,
          theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery: true,
          title: true,
          topazPhotoAi: true,
          updatedAt: true,
          url: true,
          usingTheWmicCommandForDetailedProcessInformationWithExamples: true,
          usingWmicCommand: true,
          wmicCommand: true,
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
  @swagger.ApiOkResponse({ type: Bookmark })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bookmark",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBookmark(
    @common.Param() params: BookmarkWhereUniqueInput
  ): Promise<Bookmark | null> {
    try {
      return await this.service.deleteBookmark({
        where: params,
        select: {
          addDate: true,
          aiFigure: true,
          aiPoweredBookRecommendationsBookSurfAi: true,
          aiScientist: true,
          allApi: true,
          applicationOfExcavator_3DGuidanceSystem: true,
          applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
            true,
          arxiv: true,
          blackForestLabsFlux1SchnellHuggingFace: true,
          blackForestLabsFlux_1SchnellHuggingFace: true,
          bookSurfAi: true,
          brainybear: true,
          careercompanion: true,
          chinaInflatable: true,
          compareaimodels: true,
          connectedPapers: true,
          connectedPapersFindAndExploreAcademicPapers: true,
          connexionTLRecoursCitoyensConseilD_39Tat: true,
          connexionTeleRecoursCitoyens: true,
          courseMasteringFullStackDevelopment: true,
          courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
            true,
          createdAt: true,
          dagsHub: true,
          dashboard: true,
          dashboardSpeechmatics: true,
          deepAi: true,
          deepSeekCoder: true,
          deepgram: true,
          deeplearningAi: true,
          deepseekAiDeepSeekCoderV2Instruct: true,
          deepseekAiDeepSeekCoderV2InstructHuggingFace: true,
          defaultFolderDashboardNebiusAi: true,
          demoWithUi: true,
          diplomatie: true,
          etatCivilEtNationalite: true,
          etatCivilEtNationaliteFrancaise: true,
          figureAi: true,
          findARemoteAiJob: true,
          flux1Schnell: true,
          freeTranscriptionToolDeepgram: true,
          hCaptcha: true,
          hCaptchaDashboard: true,
          homeSubstack: true,
          icon: true,
          id: true,
          improvingAccuracyOfLlmApplications: true,
          improvingAccuracyOfLlmApplicationsDeepLearningAi: true,
          interviewGenerator: true,
          interviewQuestionGenerator: true,
          jumpCloud: true,
          lab2: true,
          lab2AiGeneratedDataApps: true,
          learnopalFlashcards: true,
          lidarSensorExcavatorGoogleSearch: true,
          massistant: true,
          massistantYourInspiringCompanion: true,
          massistantYourInspiringCompanionForLife: true,
          mindsmith: true,
          mmSciAMultimodalMultiDisciplineDataset: true,
          mmSciAMultimodalMultiDisciplineDatasetForPhD: true,
          mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
            true,
          multionAi: true,
          napkinAi: true,
          navigation: true,
          nebiusAi: true,
          orderTermsInflatablesChinee: true,
          orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
            true,
          polygrAi: true,
          polygrAiDigitalPolygraphPoweredByAi: true,
          proAiComparisonTool: true,
          quickStart: true,
          sakanaAi: true,
          sakanaAiAiScientist: true,
          sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
            true,
          scanDocFlow: true,
          signInNapkinAi: true,
          signupJumpCloud: true,
          startHereTutorialLesson: true,
          substack: true,
          systemRequirementsTopazPhotoAi: true,
          tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
            true,
          tavus: true,
          teleRecours: true,
          textMine: true,
          theAiScientistFullyAutomatedOpenEndedScientificDiscovery: true,
          theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery: true,
          title: true,
          topazPhotoAi: true,
          updatedAt: true,
          url: true,
          usingTheWmicCommandForDetailedProcessInformationWithExamples: true,
          usingWmicCommand: true,
          wmicCommand: true,
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
