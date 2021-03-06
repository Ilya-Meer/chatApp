import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ users }) => (
  <aside id="usersList" className="sidebar container">
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  </aside>
);

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Sidebar;
