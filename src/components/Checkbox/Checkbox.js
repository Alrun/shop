import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

export default function Checkbox(props) {
  const {label, checked, value, handleChecked} = props;

  return (
    <div className="custom-control custom-checkbox">
      <input
        id={ value }
        type="checkbox"
        className="custom-control-input"
        value={ value }
        checked={ checked }
        onChange={ handleChecked() }
      />
      <label className="custom-control-label" htmlFor={ value }>{ label }</label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleChecked: PropTypes.func.isRequired
};