import uuid from 'uuid';
import * as types from '../constants/ActionTypes';

const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: uuid(),
  message,
  author,
});

const addUser = name => ({
  type: types.ADD_USER,
  id: uuid(),
  name,
});

const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: uuid(),
  message,
  author,
});

const populateUsersList = users => ({
  type: types.USERS_LIST,
  users,
});

export {
  addMessage, addUser, messageReceived, populateUsersList,
};
