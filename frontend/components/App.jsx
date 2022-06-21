import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import GameIndexContainer from "./game/game_index_container";
import GameShowContainer from "./game/game_show_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    

    <header>
      <NavBarContainer />
    </header>

    <div className="main-content">
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/games" component={GameIndexContainer} />
        <Route path="/games/:gameId" component={GameShowContainer} />
      </Switch>
    </div>

    
  </div>
);

export default App;