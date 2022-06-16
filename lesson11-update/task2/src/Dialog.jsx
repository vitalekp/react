import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ children, title, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  title: '2022',
  isOpen: false,
};

export default Dialog;
