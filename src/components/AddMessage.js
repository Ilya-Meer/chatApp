import React from 'react';
import PropTypes from 'prop-types';

class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text: '',
    };
  }

  handleChange(e) {
    const newText = e.target.value;
    this.setState(() => ({
      text: newText,
    }));
  }

  handleSendMessage(e) {
    const { dispatch } = this.props;
    if (e.key === 'Enter') {
      dispatch(e.target.value, 'Me');
      e.target.value = '';
    }
  }

  render() {
    const { text } = this.state;
    return (
      <section id="addMessage">
        <input
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleSendMessage}
          value={text}
        />
      </section>
    );
  }
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default AddMessage;
