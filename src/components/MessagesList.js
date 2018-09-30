import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessagesList = ({ messages }) => (
  <section id="messagesList" className="messagesList">
    {messages.length >= 1
      ? (
        <ul>
          {messages.map(message => (
            <Message key={message.id} {...message} />
          ))}
        </ul>
      )
      : (
        <p>This is where the messages would be displayed if there were any. Say hello!</p>
      )
    }
  </section>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MessagesList;
