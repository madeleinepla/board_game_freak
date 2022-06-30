import { combineReducers } from 'redux';
import ListCommentsReducer from './list_comments_reducer';
import GamesReducer from './games_reducer';
import ListsReducer from './lists_reducer';
import ListItemsReducer from './list_items_reducer';
import UsersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  games: GamesReducer,
  lists: ListsReducer,
  listItems: ListItemsReducer,
  listComments: ListCommentsReducer
});

export default entitiesReducer;