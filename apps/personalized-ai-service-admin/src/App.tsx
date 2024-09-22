import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConversationHistoryList } from "./conversationHistory/ConversationHistoryList";
import { ConversationHistoryCreate } from "./conversationHistory/ConversationHistoryCreate";
import { ConversationHistoryEdit } from "./conversationHistory/ConversationHistoryEdit";
import { ConversationHistoryShow } from "./conversationHistory/ConversationHistoryShow";
import { AiResponseList } from "./aiResponse/AiResponseList";
import { AiResponseCreate } from "./aiResponse/AiResponseCreate";
import { AiResponseEdit } from "./aiResponse/AiResponseEdit";
import { AiResponseShow } from "./aiResponse/AiResponseShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SegmentList } from "./segment/SegmentList";
import { SegmentCreate } from "./segment/SegmentCreate";
import { SegmentEdit } from "./segment/SegmentEdit";
import { SegmentShow } from "./segment/SegmentShow";
import { PreferenceList } from "./preference/PreferenceList";
import { PreferenceCreate } from "./preference/PreferenceCreate";
import { PreferenceEdit } from "./preference/PreferenceEdit";
import { PreferenceShow } from "./preference/PreferenceShow";
import { ContextList } from "./context/ContextList";
import { ContextCreate } from "./context/ContextCreate";
import { ContextEdit } from "./context/ContextEdit";
import { ContextShow } from "./context/ContextShow";
import { ComputeTaskList } from "./computeTask/ComputeTaskList";
import { ComputeTaskCreate } from "./computeTask/ComputeTaskCreate";
import { ComputeTaskEdit } from "./computeTask/ComputeTaskEdit";
import { ComputeTaskShow } from "./computeTask/ComputeTaskShow";
import { BookmarkList } from "./bookmark/BookmarkList";
import { BookmarkCreate } from "./bookmark/BookmarkCreate";
import { BookmarkEdit } from "./bookmark/BookmarkEdit";
import { BookmarkShow } from "./bookmark/BookmarkShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"PersonalizedAIService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ConversationHistory"
          list={ConversationHistoryList}
          edit={ConversationHistoryEdit}
          create={ConversationHistoryCreate}
          show={ConversationHistoryShow}
        />
        <Resource
          name="AiResponse"
          list={AiResponseList}
          edit={AiResponseEdit}
          create={AiResponseCreate}
          show={AiResponseShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Segment"
          list={SegmentList}
          edit={SegmentEdit}
          create={SegmentCreate}
          show={SegmentShow}
        />
        <Resource
          name="Preference"
          list={PreferenceList}
          edit={PreferenceEdit}
          create={PreferenceCreate}
          show={PreferenceShow}
        />
        <Resource
          name="Context"
          list={ContextList}
          edit={ContextEdit}
          create={ContextCreate}
          show={ContextShow}
        />
        <Resource
          name="ComputeTask"
          list={ComputeTaskList}
          edit={ComputeTaskEdit}
          create={ComputeTaskCreate}
          show={ComputeTaskShow}
        />
        <Resource
          name="Bookmark"
          list={BookmarkList}
          edit={BookmarkEdit}
          create={BookmarkCreate}
          show={BookmarkShow}
        />
      </Admin>
    </div>
  );
};

export default App;
