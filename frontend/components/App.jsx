import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import GameIndexContainer from "./game/game_index_container";
import GameShowContainer from "./game/game_show_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <h1>BoardGameFreak </h1>
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/games" component={GameIndexContainer} />
      <Route exact path="/games/:gameId" component={GameShowContainer} />
    </Switch>
  </div>
);

export default App;