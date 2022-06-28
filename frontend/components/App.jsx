import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import GameIndexContainer from "./game/game_index_container";
import GameClassContainer from "./game/game_class_container";
import GameShowContainer from "./game/game_show_container";
import ListIndexContainer from "./list/list_index_container";
import ListShowContainer from "./list/list_show_container";
import CreateListFormContainer from "./list/create_list_form_container";
import EditListFormContainer from "./list/edit_list_form_container";
import CreateListItemFormContainer from "./list_item/create_list_item_form_container";
import EditListItemFormContainer from "./list_item/edit_list_item_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Home from "./home/home";
import Footer from "./footer/footer";

const App = () => (
  <div>
    

    <header>
      <NavBarContainer />
    </header>

    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/games" component={GameIndexContainer} />
        <Route exact path="/games/types" component={GameClassContainer}></Route>
        <Route exact path="/games/categories" component={GameClassContainer}></Route>
        <Route exact path="/games/mechanics" component={GameClassContainer}></Route>
        <Route exact path="/games/:gameId" component={GameShowContainer} />
        <Route exact path="/lists/hot" component={ListIndexContainer} />
        <Route exact path="/lists/recent" component={ListIndexContainer} />
        <ProtectedRoute exact path="/lists/mylists" component={ListIndexContainer} />
        <ProtectedRoute exact path="/lists/new" component={CreateListFormContainer} />
        <Route exact path="/lists/:listId" component={ListShowContainer} />
        <ProtectedRoute exact path="/lists/:listId/edit" component={EditListFormContainer} />
        <ProtectedRoute exact path="/lists/:listId/list_items/new" component={CreateListItemFormContainer} />
        <ProtectedRoute exact path="/lists/:listId/list_items/:listItemId/edit" component={EditListItemFormContainer} />
      </Switch>
    </div>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;