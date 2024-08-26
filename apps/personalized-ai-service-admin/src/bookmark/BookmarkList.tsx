import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BookmarkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bookmarks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="addDate" source="addDate" />
        <TextField label="AI | Figure" source="aiFigure" />
        <TextField
          label="AI-Powered Book Recommendations | BookSurfAI"
          source="aiPoweredBookRecommendationsBookSurfAi"
        />
        <TextField label="AI_Scientist" source="aiScientist" />
        <TextField label="AllAPI" source="allApi" />
        <TextField
          label="Application_of_Excavator_3D_Guidance_System"
          source="applicationOfExcavator_3DGuidanceSystem"
        />
        <TextField
          label="Application of Excavator 3D Guidance System in Waterway Dredging | Hi-Target - Geo-matching"
          source="applicationOfExcavator_3DGuidanceSystemInWaterwayDredgingHiTargetGeoMatching"
        />
        <TextField label="arxiv" source="arxiv" />
        <TextField
          label="black_forest_labs_FLUX1_schnell_Hugging_Face"
          source="blackForestLabsFlux1SchnellHuggingFace"
        />
        <TextField
          label="black-forest-labs/FLUX.1-schnell · Hugging Face"
          source="blackForestLabsFlux_1SchnellHuggingFace"
        />
        <TextField label="BookSurfAI" source="bookSurfAi" />
        <TextField label="Brainybear" source="brainybear" />
        <TextField label="Careercompanion" source="careercompanion" />
        <TextField label="china-inflatable" source="chinaInflatable" />
        <TextField label="compareaimodels" source="compareaimodels" />
        <TextField label="Connected_Papers" source="connectedPapers" />
        <TextField
          label="Connected Papers | Find and explore academic papers"
          source="connectedPapersFindAndExploreAcademicPapers"
        />
        <TextField
          label="Connexion | Télérecours Citoyens | Conseil d&#39;État"
          source="connexionTLRecoursCitoyensConseilD_39Tat"
        />
        <TextField
          label="Connexion_TeleRecours_Citoyens"
          source="connexionTeleRecoursCitoyens"
        />
        <TextField
          label="Course_Mastering_Full_Stack_Development"
          source="courseMasteringFullStackDevelopment"
        />
        <TextField
          label="Course Mastering Full Stack Development_ A Comprehensive Guide to Building End-to-End Applications (1).pdf | Opal"
          source="courseMasteringFullStackDevelopmentAComprehensiveGuideToBuildingEndToEndApplications_1PdfOpal"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DagsHub" source="dagsHub" />
        <TextField label="Dashboard" source="dashboard" />
        <TextField
          label="Dashboard | Speechmatics"
          source="dashboardSpeechmatics"
        />
        <TextField label="DeepAI" source="deepAi" />
        <TextField label="DeepSeek_Coder" source="deepSeekCoder" />
        <TextField label="Deepgram" source="deepgram" />
        <TextField label="deeplearning.ai" source="deeplearningAi" />
        <TextField
          label="deepseek_ai_DeepSeek_Coder_V2_Instruct"
          source="deepseekAiDeepSeekCoderV2Instruct"
        />
        <TextField
          label="deepseek-ai/DeepSeek-Coder-V2-Instruct · Hugging Face"
          source="deepseekAiDeepSeekCoderV2InstructHuggingFace"
        />
        <TextField
          label="default — Folder dashboard | Nebius AI"
          source="defaultFolderDashboardNebiusAi"
        />
        <TextField label="Demo-WithUI" source="demoWithUi" />
        <TextField label="diplomatie" source="diplomatie" />
        <TextField
          label="Etat_civil_et_nationalite"
          source="etatCivilEtNationalite"
        />
        <TextField
          label="Etat_civil_et_nationalite_francaise"
          source="etatCivilEtNationaliteFrancaise"
        />
        <TextField label="figure.ai" source="figureAi" />
        <TextField label="Find a remote AI job" source="findARemoteAiJob" />
        <TextField label="FLUX1_schnell" source="flux1Schnell" />
        <TextField
          label="Free Transcription Tool | Deepgram"
          source="freeTranscriptionToolDeepgram"
        />
        <TextField label="hCaptcha" source="hCaptcha" />
        <TextField label="hCaptcha | Dashboard" source="hCaptchaDashboard" />
        <TextField label="Home | Substack" source="homeSubstack" />
        <TextField label="icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField
          label="Improving_Accuracy_of_LLM_Applications"
          source="improvingAccuracyOfLlmApplications"
        />
        <TextField
          label="Improving Accuracy of LLM Applications - DeepLearning.AI"
          source="improvingAccuracyOfLlmApplicationsDeepLearningAi"
        />
        <TextField label="interview_generator" source="interviewGenerator" />
        <TextField
          label="Interview Question Generator"
          source="interviewQuestionGenerator"
        />
        <TextField label="JumpCloud" source="jumpCloud" />
        <TextField label="lab2" source="lab2" />
        <TextField
          label="lab2 - AI generated data apps"
          source="lab2AiGeneratedDataApps"
        />
        <TextField label="learnopal_flashcards" source="learnopalFlashcards" />
        <TextField
          label="lidar_sensor_excavator_Google_Search"
          source="lidarSensorExcavatorGoogleSearch"
        />
        <TextField label="massistant" source="massistant" />
        <TextField
          label="massistant_Your_Inspiring_Companion"
          source="massistantYourInspiringCompanion"
        />
        <TextField
          label="massistant - Your Inspiring Companion For Life"
          source="massistantYourInspiringCompanionForLife"
        />
        <TextField label="mindsmith" source="mindsmith" />
        <TextField
          label="MMSci_A_Multimodal_Multi_Discipline_Dataset"
          source="mmSciAMultimodalMultiDisciplineDataset"
        />
        <TextField
          label="MMSci_A_Multimodal_Multi_Discipline_Dataset_for_PhD"
          source="mmSciAMultimodalMultiDisciplineDatasetForPhD"
        />
        <TextField
          label="MMSci: A Multimodal Multi-Discipline Dataset for PhD-Level Scientific Comprehension"
          source="mmSciAMultimodalMultiDisciplineDatasetForPhDLevelScientificComprehension"
        />
        <TextField label="multion.ai" source="multionAi" />
        <TextField label="Napkin_AI" source="napkinAi" />
        <TextField label="navigation" source="navigation" />
        <TextField label="Nebius_AI" source="nebiusAi" />
        <TextField
          label="Order_Terms_Inflatables_Chinee"
          source="orderTermsInflatablesChinee"
        />
        <TextField
          label="Order Terms - Inflatables,Inflatable Bouncers,Inflatable Water Slides,Inflatable Tents,Inflatables for Games in Chinee"
          source="orderTermsInflatablesInflatableBouncersInflatableWaterSlidesInflatableTentsInflatablesForGamesInChinee"
        />
        <TextField label="PolygrAI" source="polygrAi" />
        <TextField
          label="PolygrAI - Digital Polygraph Powered by AI"
          source="polygrAiDigitalPolygraphPoweredByAi"
        />
        <TextField
          label="Pro - AI Comparison Tool"
          source="proAiComparisonTool"
        />
        <TextField label="Quick Start" source="quickStart" />
        <TextField label="sakana.ai" source="sakanaAi" />
        <TextField label="SakanaAI_AI_Scientist" source="sakanaAiAiScientist" />
        <TextField
          label="SakanaAI/AI-Scientist: The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery"
          source="sakanaAiAiScientistTheAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery"
        />
        <TextField label="ScanDocFlow" source="scanDocFlow" />
        <TextField label="Sign in - Napkin AI" source="signInNapkinAi" />
        <TextField label="Signup | JumpCloud" source="signupJumpCloud" />
        <TextField
          label="Start Here 🚀 Tutorial Lesson"
          source="startHereTutorialLesson"
        />
        <TextField label="substack" source="substack" />
        <TextField
          label="System Requirements | Topaz Photo AI"
          source="systemRequirementsTopazPhotoAi"
        />
        <TextField
          label="État civil et nationalité française - Ministère de l’Europe et des Affaires étrangères"
          source="tatCivilEtNationalitFranAiseMinistReDeLEuropeEtDesAffairesTrangRes"
        />
        <TextField label="Tavus" source="tavus" />
        <TextField label="TeleRecours" source="teleRecours" />
        <TextField label="TextMine" source="textMine" />
        <TextField
          label="The_AI_Scientist_Fully_Automated_Open_Ended_Scientific_Discovery"
          source="theAiScientistFullyAutomatedOpenEndedScientificDiscovery"
        />
        <TextField
          label="The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery"
          source="theAiScientistTowardsFullyAutomatedOpenEndedScientificDiscovery"
        />
        <TextField label="title" source="title" />
        <TextField label="Topaz_Photo_AI" source="topazPhotoAi" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <TextField
          label="Using the WMIC Command for Detailed Process Information (with examples)"
          source="usingTheWmicCommandForDetailedProcessInformationWithExamples"
        />
        <TextField label="Using_WMIC_Command" source="usingWmicCommand" />
        <TextField label="WMIC_Command" source="wmicCommand" />
      </Datagrid>
    </List>
  );
};
