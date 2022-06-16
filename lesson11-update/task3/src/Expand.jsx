import React from 'react';

const Expand = ({ children, title, iconStyle, isOpen, onClose }) => {
  const Open = isOpen ? <div className="expand__content">{children}</div> : null;

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className={iconStyle}></i>
        </button>
      </div>
      {Open}
      {/* <div className="expand__content">{children}</div> */}
    </div>
  );
};

export default Expand;

// <i class="fa-solid fa-angle-down"></i>
//  <i className="fas fa-chevron-up"></i>
