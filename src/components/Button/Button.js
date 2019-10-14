import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default function Button(props) {
  const {icon, title, variant, classes, submit, handleOnClick} = props;

  return (
    <button
      type={ submit ? 'submit' : 'button' }
      className={ `${ !classes ? 'btn' : `btn ${ classes }` } ${ variant === 'light' ? 'btn-light' : 'btn-primary' }` }
      onClick={handleOnClick}
    >
      { icon
        ? <>
          <span className="d-flex align-items-center">
            <i className="d-flex mr-2">
              {icon}
            </i>
            <span>{ title }</span>
           </span>
        </>
        : <>{ title }</>
      }
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  variant: PropTypes.string,
  classes: PropTypes.string,
  submit: PropTypes.bool,
  handleOnClick: PropTypes.func
};