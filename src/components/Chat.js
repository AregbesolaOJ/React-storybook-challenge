
import React from 'react';
import PropTypes from 'prop-types';

/* Primary UI component for Chat */

export const Chat = ({ role, title, userAvatar, ...props }) => (
  <div className="storybook-chat">
    <div className="storybook-chat__main">
      <div className="storybook-chat__main-header">
        <div className="avatar">
          <img src={userAvatar} alt="user-avatar" object="Avatar" />
        </div>
        <div className="info">
          <h3 className="user-name">{title}</h3>
          <p className="user-role" title="Role">{role}</p>
        </div>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M12.3804 1.73433C12.4873 1.62776 12.5722 1.50111 12.6301 1.36167C12.688 1.22222 12.7178 1.07272 12.7178 0.921734C12.7178 0.770746 12.688 0.621243 12.6301 0.481799C12.5722 0.342355 12.4873 0.215712 12.3804 0.109133C12.2948 0.0385816 12.1873 0 12.0764 0C11.9654 0 11.8579 0.0385816 11.7723 0.109133L6.5 5.38435L1.73433 0.619637C1.62776 0.512688 1.50111 0.427829 1.36167 0.369927C1.22222 0.312026 1.07272 0.28222 0.921734 0.28222C0.770746 0.28222 0.621243 0.312026 0.481799 0.369927C0.342355 0.427829 0.215712 0.512688 0.109133 0.619637C0.0385816 0.70524 0 0.812716 0 0.923646C0 1.03458 0.0385816 1.14205 0.109133 1.22765L5.38435 6.5L0.619637 11.2657C0.512688 11.3722 0.427829 11.4989 0.369927 11.6383C0.312026 11.7778 0.28222 11.9273 0.28222 12.0783C0.28222 12.2293 0.312026 12.3788 0.369927 12.5182C0.427829 12.6576 0.512688 12.7843 0.619637 12.8909C0.70524 12.9614 0.812716 13 0.923646 13C1.03458 13 1.14205 12.9614 1.22765 12.8909L6.5 7.61565L11.2657 12.3813C11.3722 12.4883 11.4989 12.5731 11.6383 12.631C11.7778 12.6889 11.9273 12.7187 12.0783 12.7187C12.2293 12.7187 12.3788 12.6889 12.5182 12.631C12.6576 12.5731 12.7843 12.4883 12.8909 12.3813C12.9614 12.2957 13 12.1882 13 12.0773C13 11.9664 12.9614 11.8589 12.8909 11.7733L7.61565 6.5L12.3804 1.73433Z" fill="white"/>
        </svg>
      </div>
      <p className="storybook-chat__main-description">
        {`Hi there. 👋🏻  We use Boards to share initial goals and ideas.`}
      </p>
    </div>
    <div className="storybook-chat__footer">
      <input
        autoComplete={false}
        required={props.isRequired}
        className="storybook-chat__footer-field"
        id={props.id}
        name={props.id}
        placeholder="Type your message"
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
      <button
        type="button"
        className="storybook-chat__footer-btn"
        {...props}
      >
        Send
      </button>
    </div>
  </div>
);

Chat.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  userAvatar: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
