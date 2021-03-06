import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestUsers = () => dispatch => (
  UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const requestUser = (userId) => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
);


