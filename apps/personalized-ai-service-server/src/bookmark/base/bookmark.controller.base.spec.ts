import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BookmarkController } from "../bookmark.controller";
import { BookmarkService } from "../bookmark.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addDate: new Date(),
  aiFigure: "exampleAiFigure",
  aiPoweredBookRecommendationsBookSurfAi:
    "exampleAiPoweredBookRecommendationsBookSurfAi",
  aiScientist: "exampleAiScientist",
  allApi: "exampleAllApi",
  applicationOfExcavator_3DGuidanceSystem:
    "exampleApplicationOfExcavator_3DGuidanceSystem",
  applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
    "exampleApplicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching",
  arxiv: "exampleArxiv",
  blackForestLabsFlux1SchnellHuggingFace:
    "exampleBlackForestLabsFlux1SchnellHuggingFace",
  blackForestLabsFlux_1SchnellHuggingFace:
    "exampleBlackForestLabsFlux_1SchnellHuggingFace",
  bookSurfAi: "exampleBookSurfAi",
  brainybear: "exampleBrainybear",
  careercompanion: "exampleCareercompanion",
  chinaInflatable: "exampleChinaInflatable",
  compareaimodels: "exampleCompareaimodels",
  connectedPapers: "exampleConnectedPapers",
  connectedPapersFindAndExploreAcademicPapers:
    "exampleConnectedPapersFindAndExploreAcademicPapers",
  connexionTLRecoursCitoyensConseilD_39Tat:
    "exampleConnexionTlRecoursCitoyensConseilD_39Tat",
  connexionTeleRecoursCitoyens: "exampleConnexionTeleRecoursCitoyens",
  courseMasteringFullStackDevelopment:
    "exampleCourseMasteringFullStackDevelopment",
  courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
    "exampleCourseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal",
  createdAt: new Date(),
  dagsHub: "exampleDagsHub",
  dashboard: "exampleDashboard",
  dashboardSpeechmatics: "exampleDashboardSpeechmatics",
  deepAi: "exampleDeepAi",
  deepSeekCoder: "exampleDeepSeekCoder",
  deepgram: "exampleDeepgram",
  deeplearningAi: "exampleDeeplearningAi",
  deepseekAiDeepSeekCoderV2Instruct: "exampleDeepseekAiDeepSeekCoderV2Instruct",
  deepseekAiDeepSeekCoderV2InstructHuggingFace:
    "exampleDeepseekAiDeepSeekCoderV2InstructHuggingFace",
  defaultFolderDashboardNebiusAi: "exampleDefaultFolderDashboardNebiusAi",
  demoWithUi: "exampleDemoWithUi",
  diplomatie: "exampleDiplomatie",
  etatCivilEtNationalite: "exampleEtatCivilEtNationalite",
  etatCivilEtNationaliteFrancaise: "exampleEtatCivilEtNationaliteFrancaise",
  figureAi: "exampleFigureAi",
  findARemoteAiJob: "exampleFindARemoteAiJob",
  flux1Schnell: "exampleFlux1Schnell",
  freeTranscriptionToolDeepgram: "exampleFreeTranscriptionToolDeepgram",
  hCaptcha: "exampleHCaptcha",
  hCaptchaDashboard: "exampleHCaptchaDashboard",
  homeSubstack: "exampleHomeSubstack",
  icon: "exampleIcon",
  id: "exampleId",
  improvingAccuracyOfLlmApplications:
    "exampleImprovingAccuracyOfLlmApplications",
  improvingAccuracyOfLlmApplicationsDeepLearningAi:
    "exampleImprovingAccuracyOfLlmApplicationsDeepLearningAi",
  interviewGenerator: "exampleInterviewGenerator",
  interviewQuestionGenerator: "exampleInterviewQuestionGenerator",
  jumpCloud: "exampleJumpCloud",
  lab2: "exampleLab2",
  lab2AiGeneratedDataApps: "exampleLab2AiGeneratedDataApps",
  learnopalFlashcards: "exampleLearnopalFlashcards",
  lidarSensorExcavatorGoogleSearch: "exampleLidarSensorExcavatorGoogleSearch",
  massistant: "exampleMassistant",
  massistantYourInspiringCompanion: "exampleMassistantYourInspiringCompanion",
  massistantYourInspiringCompanionForLife:
    "exampleMassistantYourInspiringCompanionForLife",
  mindsmith: "exampleMindsmith",
  mmSciAMultimodalMultiDisciplineDataset:
    "exampleMmSciAMultimodalMultiDisciplineDataset",
  mmSciAMultimodalMultiDisciplineDatasetForPhD:
    "exampleMmSciAMultimodalMultiDisciplineDatasetForPhD",
  mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
    "exampleMmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension",
  multionAi: "exampleMultionAi",
  napkinAi: "exampleNapkinAi",
  navigation: "exampleNavigation",
  nebiusAi: "exampleNebiusAi",
  orderTermsInflatablesChinee: "exampleOrderTermsInflatablesChinee",
  orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
    "exampleOrderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee",
  polygrAi: "examplePolygrAi",
  polygrAiDigitalPolygraphPoweredByAi:
    "examplePolygrAiDigitalPolygraphPoweredByAi",
  proAiComparisonTool: "exampleProAiComparisonTool",
  quickStart: "exampleQuickStart",
  sakanaAi: "exampleSakanaAi",
  sakanaAiAiScientist: "exampleSakanaAiAiScientist",
  sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
    "exampleSakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery",
  scanDocFlow: "exampleScanDocFlow",
  signInNapkinAi: "exampleSignInNapkinAi",
  signupJumpCloud: "exampleSignupJumpCloud",
  startHereTutorialLesson: "exampleStartHereTutorialLesson",
  substack: "exampleSubstack",
  systemRequirementsTopazPhotoAi: "exampleSystemRequirementsTopazPhotoAi",
  tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
    "exampleTatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes",
  tavus: "exampleTavus",
  teleRecours: "exampleTeleRecours",
  textMine: "exampleTextMine",
  theAiScientistFullyAutomatedOpenEndedScientificDiscovery:
    "exampleTheAiScientistFullyAutomatedOpenEndedScientificDiscovery",
  theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
    "exampleTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery",
  title: "exampleTitle",
  topazPhotoAi: "exampleTopazPhotoAi",
  updatedAt: new Date(),
  url: "exampleUrl",
  usingTheWmicCommandForDetailedProcessInformationWithExamples:
    "exampleUsingTheWmicCommandForDetailedProcessInformationWithExamples",
  usingWmicCommand: "exampleUsingWmicCommand",
  wmicCommand: "exampleWmicCommand",
};
const CREATE_RESULT = {
  addDate: new Date(),
  aiFigure: "exampleAiFigure",
  aiPoweredBookRecommendationsBookSurfAi:
    "exampleAiPoweredBookRecommendationsBookSurfAi",
  aiScientist: "exampleAiScientist",
  allApi: "exampleAllApi",
  applicationOfExcavator_3DGuidanceSystem:
    "exampleApplicationOfExcavator_3DGuidanceSystem",
  applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
    "exampleApplicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching",
  arxiv: "exampleArxiv",
  blackForestLabsFlux1SchnellHuggingFace:
    "exampleBlackForestLabsFlux1SchnellHuggingFace",
  blackForestLabsFlux_1SchnellHuggingFace:
    "exampleBlackForestLabsFlux_1SchnellHuggingFace",
  bookSurfAi: "exampleBookSurfAi",
  brainybear: "exampleBrainybear",
  careercompanion: "exampleCareercompanion",
  chinaInflatable: "exampleChinaInflatable",
  compareaimodels: "exampleCompareaimodels",
  connectedPapers: "exampleConnectedPapers",
  connectedPapersFindAndExploreAcademicPapers:
    "exampleConnectedPapersFindAndExploreAcademicPapers",
  connexionTLRecoursCitoyensConseilD_39Tat:
    "exampleConnexionTlRecoursCitoyensConseilD_39Tat",
  connexionTeleRecoursCitoyens: "exampleConnexionTeleRecoursCitoyens",
  courseMasteringFullStackDevelopment:
    "exampleCourseMasteringFullStackDevelopment",
  courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
    "exampleCourseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal",
  createdAt: new Date(),
  dagsHub: "exampleDagsHub",
  dashboard: "exampleDashboard",
  dashboardSpeechmatics: "exampleDashboardSpeechmatics",
  deepAi: "exampleDeepAi",
  deepSeekCoder: "exampleDeepSeekCoder",
  deepgram: "exampleDeepgram",
  deeplearningAi: "exampleDeeplearningAi",
  deepseekAiDeepSeekCoderV2Instruct: "exampleDeepseekAiDeepSeekCoderV2Instruct",
  deepseekAiDeepSeekCoderV2InstructHuggingFace:
    "exampleDeepseekAiDeepSeekCoderV2InstructHuggingFace",
  defaultFolderDashboardNebiusAi: "exampleDefaultFolderDashboardNebiusAi",
  demoWithUi: "exampleDemoWithUi",
  diplomatie: "exampleDiplomatie",
  etatCivilEtNationalite: "exampleEtatCivilEtNationalite",
  etatCivilEtNationaliteFrancaise: "exampleEtatCivilEtNationaliteFrancaise",
  figureAi: "exampleFigureAi",
  findARemoteAiJob: "exampleFindARemoteAiJob",
  flux1Schnell: "exampleFlux1Schnell",
  freeTranscriptionToolDeepgram: "exampleFreeTranscriptionToolDeepgram",
  hCaptcha: "exampleHCaptcha",
  hCaptchaDashboard: "exampleHCaptchaDashboard",
  homeSubstack: "exampleHomeSubstack",
  icon: "exampleIcon",
  id: "exampleId",
  improvingAccuracyOfLlmApplications:
    "exampleImprovingAccuracyOfLlmApplications",
  improvingAccuracyOfLlmApplicationsDeepLearningAi:
    "exampleImprovingAccuracyOfLlmApplicationsDeepLearningAi",
  interviewGenerator: "exampleInterviewGenerator",
  interviewQuestionGenerator: "exampleInterviewQuestionGenerator",
  jumpCloud: "exampleJumpCloud",
  lab2: "exampleLab2",
  lab2AiGeneratedDataApps: "exampleLab2AiGeneratedDataApps",
  learnopalFlashcards: "exampleLearnopalFlashcards",
  lidarSensorExcavatorGoogleSearch: "exampleLidarSensorExcavatorGoogleSearch",
  massistant: "exampleMassistant",
  massistantYourInspiringCompanion: "exampleMassistantYourInspiringCompanion",
  massistantYourInspiringCompanionForLife:
    "exampleMassistantYourInspiringCompanionForLife",
  mindsmith: "exampleMindsmith",
  mmSciAMultimodalMultiDisciplineDataset:
    "exampleMmSciAMultimodalMultiDisciplineDataset",
  mmSciAMultimodalMultiDisciplineDatasetForPhD:
    "exampleMmSciAMultimodalMultiDisciplineDatasetForPhD",
  mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
    "exampleMmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension",
  multionAi: "exampleMultionAi",
  napkinAi: "exampleNapkinAi",
  navigation: "exampleNavigation",
  nebiusAi: "exampleNebiusAi",
  orderTermsInflatablesChinee: "exampleOrderTermsInflatablesChinee",
  orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
    "exampleOrderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee",
  polygrAi: "examplePolygrAi",
  polygrAiDigitalPolygraphPoweredByAi:
    "examplePolygrAiDigitalPolygraphPoweredByAi",
  proAiComparisonTool: "exampleProAiComparisonTool",
  quickStart: "exampleQuickStart",
  sakanaAi: "exampleSakanaAi",
  sakanaAiAiScientist: "exampleSakanaAiAiScientist",
  sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
    "exampleSakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery",
  scanDocFlow: "exampleScanDocFlow",
  signInNapkinAi: "exampleSignInNapkinAi",
  signupJumpCloud: "exampleSignupJumpCloud",
  startHereTutorialLesson: "exampleStartHereTutorialLesson",
  substack: "exampleSubstack",
  systemRequirementsTopazPhotoAi: "exampleSystemRequirementsTopazPhotoAi",
  tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
    "exampleTatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes",
  tavus: "exampleTavus",
  teleRecours: "exampleTeleRecours",
  textMine: "exampleTextMine",
  theAiScientistFullyAutomatedOpenEndedScientificDiscovery:
    "exampleTheAiScientistFullyAutomatedOpenEndedScientificDiscovery",
  theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
    "exampleTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery",
  title: "exampleTitle",
  topazPhotoAi: "exampleTopazPhotoAi",
  updatedAt: new Date(),
  url: "exampleUrl",
  usingTheWmicCommandForDetailedProcessInformationWithExamples:
    "exampleUsingTheWmicCommandForDetailedProcessInformationWithExamples",
  usingWmicCommand: "exampleUsingWmicCommand",
  wmicCommand: "exampleWmicCommand",
};
const FIND_MANY_RESULT = [
  {
    addDate: new Date(),
    aiFigure: "exampleAiFigure",
    aiPoweredBookRecommendationsBookSurfAi:
      "exampleAiPoweredBookRecommendationsBookSurfAi",
    aiScientist: "exampleAiScientist",
    allApi: "exampleAllApi",
    applicationOfExcavator_3DGuidanceSystem:
      "exampleApplicationOfExcavator_3DGuidanceSystem",
    applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
      "exampleApplicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching",
    arxiv: "exampleArxiv",
    blackForestLabsFlux1SchnellHuggingFace:
      "exampleBlackForestLabsFlux1SchnellHuggingFace",
    blackForestLabsFlux_1SchnellHuggingFace:
      "exampleBlackForestLabsFlux_1SchnellHuggingFace",
    bookSurfAi: "exampleBookSurfAi",
    brainybear: "exampleBrainybear",
    careercompanion: "exampleCareercompanion",
    chinaInflatable: "exampleChinaInflatable",
    compareaimodels: "exampleCompareaimodels",
    connectedPapers: "exampleConnectedPapers",
    connectedPapersFindAndExploreAcademicPapers:
      "exampleConnectedPapersFindAndExploreAcademicPapers",
    connexionTLRecoursCitoyensConseilD_39Tat:
      "exampleConnexionTlRecoursCitoyensConseilD_39Tat",
    connexionTeleRecoursCitoyens: "exampleConnexionTeleRecoursCitoyens",
    courseMasteringFullStackDevelopment:
      "exampleCourseMasteringFullStackDevelopment",
    courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
      "exampleCourseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal",
    createdAt: new Date(),
    dagsHub: "exampleDagsHub",
    dashboard: "exampleDashboard",
    dashboardSpeechmatics: "exampleDashboardSpeechmatics",
    deepAi: "exampleDeepAi",
    deepSeekCoder: "exampleDeepSeekCoder",
    deepgram: "exampleDeepgram",
    deeplearningAi: "exampleDeeplearningAi",
    deepseekAiDeepSeekCoderV2Instruct:
      "exampleDeepseekAiDeepSeekCoderV2Instruct",
    deepseekAiDeepSeekCoderV2InstructHuggingFace:
      "exampleDeepseekAiDeepSeekCoderV2InstructHuggingFace",
    defaultFolderDashboardNebiusAi: "exampleDefaultFolderDashboardNebiusAi",
    demoWithUi: "exampleDemoWithUi",
    diplomatie: "exampleDiplomatie",
    etatCivilEtNationalite: "exampleEtatCivilEtNationalite",
    etatCivilEtNationaliteFrancaise: "exampleEtatCivilEtNationaliteFrancaise",
    figureAi: "exampleFigureAi",
    findARemoteAiJob: "exampleFindARemoteAiJob",
    flux1Schnell: "exampleFlux1Schnell",
    freeTranscriptionToolDeepgram: "exampleFreeTranscriptionToolDeepgram",
    hCaptcha: "exampleHCaptcha",
    hCaptchaDashboard: "exampleHCaptchaDashboard",
    homeSubstack: "exampleHomeSubstack",
    icon: "exampleIcon",
    id: "exampleId",
    improvingAccuracyOfLlmApplications:
      "exampleImprovingAccuracyOfLlmApplications",
    improvingAccuracyOfLlmApplicationsDeepLearningAi:
      "exampleImprovingAccuracyOfLlmApplicationsDeepLearningAi",
    interviewGenerator: "exampleInterviewGenerator",
    interviewQuestionGenerator: "exampleInterviewQuestionGenerator",
    jumpCloud: "exampleJumpCloud",
    lab2: "exampleLab2",
    lab2AiGeneratedDataApps: "exampleLab2AiGeneratedDataApps",
    learnopalFlashcards: "exampleLearnopalFlashcards",
    lidarSensorExcavatorGoogleSearch: "exampleLidarSensorExcavatorGoogleSearch",
    massistant: "exampleMassistant",
    massistantYourInspiringCompanion: "exampleMassistantYourInspiringCompanion",
    massistantYourInspiringCompanionForLife:
      "exampleMassistantYourInspiringCompanionForLife",
    mindsmith: "exampleMindsmith",
    mmSciAMultimodalMultiDisciplineDataset:
      "exampleMmSciAMultimodalMultiDisciplineDataset",
    mmSciAMultimodalMultiDisciplineDatasetForPhD:
      "exampleMmSciAMultimodalMultiDisciplineDatasetForPhD",
    mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
      "exampleMmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension",
    multionAi: "exampleMultionAi",
    napkinAi: "exampleNapkinAi",
    navigation: "exampleNavigation",
    nebiusAi: "exampleNebiusAi",
    orderTermsInflatablesChinee: "exampleOrderTermsInflatablesChinee",
    orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
      "exampleOrderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee",
    polygrAi: "examplePolygrAi",
    polygrAiDigitalPolygraphPoweredByAi:
      "examplePolygrAiDigitalPolygraphPoweredByAi",
    proAiComparisonTool: "exampleProAiComparisonTool",
    quickStart: "exampleQuickStart",
    sakanaAi: "exampleSakanaAi",
    sakanaAiAiScientist: "exampleSakanaAiAiScientist",
    sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
      "exampleSakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery",
    scanDocFlow: "exampleScanDocFlow",
    signInNapkinAi: "exampleSignInNapkinAi",
    signupJumpCloud: "exampleSignupJumpCloud",
    startHereTutorialLesson: "exampleStartHereTutorialLesson",
    substack: "exampleSubstack",
    systemRequirementsTopazPhotoAi: "exampleSystemRequirementsTopazPhotoAi",
    tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
      "exampleTatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes",
    tavus: "exampleTavus",
    teleRecours: "exampleTeleRecours",
    textMine: "exampleTextMine",
    theAiScientistFullyAutomatedOpenEndedScientificDiscovery:
      "exampleTheAiScientistFullyAutomatedOpenEndedScientificDiscovery",
    theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
      "exampleTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery",
    title: "exampleTitle",
    topazPhotoAi: "exampleTopazPhotoAi",
    updatedAt: new Date(),
    url: "exampleUrl",
    usingTheWmicCommandForDetailedProcessInformationWithExamples:
      "exampleUsingTheWmicCommandForDetailedProcessInformationWithExamples",
    usingWmicCommand: "exampleUsingWmicCommand",
    wmicCommand: "exampleWmicCommand",
  },
];
const FIND_ONE_RESULT = {
  addDate: new Date(),
  aiFigure: "exampleAiFigure",
  aiPoweredBookRecommendationsBookSurfAi:
    "exampleAiPoweredBookRecommendationsBookSurfAi",
  aiScientist: "exampleAiScientist",
  allApi: "exampleAllApi",
  applicationOfExcavator_3DGuidanceSystem:
    "exampleApplicationOfExcavator_3DGuidanceSystem",
  applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching:
    "exampleApplicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching",
  arxiv: "exampleArxiv",
  blackForestLabsFlux1SchnellHuggingFace:
    "exampleBlackForestLabsFlux1SchnellHuggingFace",
  blackForestLabsFlux_1SchnellHuggingFace:
    "exampleBlackForestLabsFlux_1SchnellHuggingFace",
  bookSurfAi: "exampleBookSurfAi",
  brainybear: "exampleBrainybear",
  careercompanion: "exampleCareercompanion",
  chinaInflatable: "exampleChinaInflatable",
  compareaimodels: "exampleCompareaimodels",
  connectedPapers: "exampleConnectedPapers",
  connectedPapersFindAndExploreAcademicPapers:
    "exampleConnectedPapersFindAndExploreAcademicPapers",
  connexionTLRecoursCitoyensConseilD_39Tat:
    "exampleConnexionTlRecoursCitoyensConseilD_39Tat",
  connexionTeleRecoursCitoyens: "exampleConnexionTeleRecoursCitoyens",
  courseMasteringFullStackDevelopment:
    "exampleCourseMasteringFullStackDevelopment",
  courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal:
    "exampleCourseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal",
  createdAt: new Date(),
  dagsHub: "exampleDagsHub",
  dashboard: "exampleDashboard",
  dashboardSpeechmatics: "exampleDashboardSpeechmatics",
  deepAi: "exampleDeepAi",
  deepSeekCoder: "exampleDeepSeekCoder",
  deepgram: "exampleDeepgram",
  deeplearningAi: "exampleDeeplearningAi",
  deepseekAiDeepSeekCoderV2Instruct: "exampleDeepseekAiDeepSeekCoderV2Instruct",
  deepseekAiDeepSeekCoderV2InstructHuggingFace:
    "exampleDeepseekAiDeepSeekCoderV2InstructHuggingFace",
  defaultFolderDashboardNebiusAi: "exampleDefaultFolderDashboardNebiusAi",
  demoWithUi: "exampleDemoWithUi",
  diplomatie: "exampleDiplomatie",
  etatCivilEtNationalite: "exampleEtatCivilEtNationalite",
  etatCivilEtNationaliteFrancaise: "exampleEtatCivilEtNationaliteFrancaise",
  figureAi: "exampleFigureAi",
  findARemoteAiJob: "exampleFindARemoteAiJob",
  flux1Schnell: "exampleFlux1Schnell",
  freeTranscriptionToolDeepgram: "exampleFreeTranscriptionToolDeepgram",
  hCaptcha: "exampleHCaptcha",
  hCaptchaDashboard: "exampleHCaptchaDashboard",
  homeSubstack: "exampleHomeSubstack",
  icon: "exampleIcon",
  id: "exampleId",
  improvingAccuracyOfLlmApplications:
    "exampleImprovingAccuracyOfLlmApplications",
  improvingAccuracyOfLlmApplicationsDeepLearningAi:
    "exampleImprovingAccuracyOfLlmApplicationsDeepLearningAi",
  interviewGenerator: "exampleInterviewGenerator",
  interviewQuestionGenerator: "exampleInterviewQuestionGenerator",
  jumpCloud: "exampleJumpCloud",
  lab2: "exampleLab2",
  lab2AiGeneratedDataApps: "exampleLab2AiGeneratedDataApps",
  learnopalFlashcards: "exampleLearnopalFlashcards",
  lidarSensorExcavatorGoogleSearch: "exampleLidarSensorExcavatorGoogleSearch",
  massistant: "exampleMassistant",
  massistantYourInspiringCompanion: "exampleMassistantYourInspiringCompanion",
  massistantYourInspiringCompanionForLife:
    "exampleMassistantYourInspiringCompanionForLife",
  mindsmith: "exampleMindsmith",
  mmSciAMultimodalMultiDisciplineDataset:
    "exampleMmSciAMultimodalMultiDisciplineDataset",
  mmSciAMultimodalMultiDisciplineDatasetForPhD:
    "exampleMmSciAMultimodalMultiDisciplineDatasetForPhD",
  mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension:
    "exampleMmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension",
  multionAi: "exampleMultionAi",
  napkinAi: "exampleNapkinAi",
  navigation: "exampleNavigation",
  nebiusAi: "exampleNebiusAi",
  orderTermsInflatablesChinee: "exampleOrderTermsInflatablesChinee",
  orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee:
    "exampleOrderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee",
  polygrAi: "examplePolygrAi",
  polygrAiDigitalPolygraphPoweredByAi:
    "examplePolygrAiDigitalPolygraphPoweredByAi",
  proAiComparisonTool: "exampleProAiComparisonTool",
  quickStart: "exampleQuickStart",
  sakanaAi: "exampleSakanaAi",
  sakanaAiAiScientist: "exampleSakanaAiAiScientist",
  sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
    "exampleSakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery",
  scanDocFlow: "exampleScanDocFlow",
  signInNapkinAi: "exampleSignInNapkinAi",
  signupJumpCloud: "exampleSignupJumpCloud",
  startHereTutorialLesson: "exampleStartHereTutorialLesson",
  substack: "exampleSubstack",
  systemRequirementsTopazPhotoAi: "exampleSystemRequirementsTopazPhotoAi",
  tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes:
    "exampleTatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes",
  tavus: "exampleTavus",
  teleRecours: "exampleTeleRecours",
  textMine: "exampleTextMine",
  theAiScientistFullyAutomatedOpenEndedScientificDiscovery:
    "exampleTheAiScientistFullyAutomatedOpenEndedScientificDiscovery",
  theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery:
    "exampleTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery",
  title: "exampleTitle",
  topazPhotoAi: "exampleTopazPhotoAi",
  updatedAt: new Date(),
  url: "exampleUrl",
  usingTheWmicCommandForDetailedProcessInformationWithExamples:
    "exampleUsingTheWmicCommandForDetailedProcessInformationWithExamples",
  usingWmicCommand: "exampleUsingWmicCommand",
  wmicCommand: "exampleWmicCommand",
};

const service = {
  createBookmark() {
    return CREATE_RESULT;
  },
  bookmarks: () => FIND_MANY_RESULT,
  bookmark: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Bookmark", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BookmarkService,
          useValue: service,
        },
      ],
      controllers: [BookmarkController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /bookmarks", async () => {
    await request(app.getHttpServer())
      .post("/bookmarks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        addDate: CREATE_RESULT.addDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bookmarks", async () => {
    await request(app.getHttpServer())
      .get("/bookmarks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          addDate: FIND_MANY_RESULT[0].addDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bookmarks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bookmarks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bookmarks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bookmarks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        addDate: FIND_ONE_RESULT.addDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bookmarks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bookmarks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        addDate: CREATE_RESULT.addDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bookmarks")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
