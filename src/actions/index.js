import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId + 1,
  message,
  author,
});

const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId + 1,
  name,
});

const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId + 1,
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
