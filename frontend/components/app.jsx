import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import BattleSideBarContainer from "./battle_sidebar/battle_sidebar_container";
import BattleShowContainer from "./battle/battle_show_container";
import BattleCreateContainer from "./battle/battle_create_container";

import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/home" component={BattleSideBarContainer}/>
    <div className="sidebar-show-container">
      <ProtectedRoute exact path="/battles/:battleId" component={BattleSideBarContainer}/>
      <ProtectedRoute exact path="/battles/new" component={BattleCreateContainer}/>
      <ProtectedRoute exact path="/battles/:battleId" component={BattleShowContainer}/>
    </div>
  </div>
);

export default App;