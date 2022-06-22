import { combineReducers } from 'redux';
import GamesReducer from './games_reducer';
import ListsReducer from './lists_reducer';
import UsersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  games: GamesReducer,
  lists: ListsReducer
});

export default entitiesReducer;